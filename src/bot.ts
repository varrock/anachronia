import {Client, Message, TextChannel} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {MessageResponder} from "./commands";
import {prefix, mainChannel} from '../utils';
import {generateReminderEmbed} from "../utils/embeds";
import {createMentionStringMessage} from "../utils/calculations";

let CronJob = require('cron').CronJob;

@injectable()
export class Bot {
    private client: Client;
    private readonly token: string;
    private messageResponder: MessageResponder;

    constructor(
        @inject(TYPES.Client) client: Client,
        @inject(TYPES.Token) token: string,
        @inject(TYPES.MessageResponder) messageResponder: MessageResponder) {
        this.client = client;
        this.token = token;
        this.messageResponder = messageResponder;
    }

    public listen(): Promise<string> {

        this.client.on('ready', () => {
            this.client.user.setActivity("with dinosaurs!").catch(console.error);
            const mainChannelObject: TextChannel = (this.client.channels.cache.get(mainChannel) as TextChannel);
            let reminders = new CronJob(
                '0 10,30,50 * * * *',
                () => {
                    if (generateReminderEmbed(mainChannelObject) !== null) {
                        mainChannelObject.send({embed: generateReminderEmbed(mainChannelObject)}).catch(console.error);
                        mainChannelObject.send(createMentionStringMessage(mainChannelObject)).then(msg => msg.delete()).catch(console.error)
                    }
                },
                null,
                true
            );
        })

        this.client.on('message', (message: Message) => {
            if (!message.content.startsWith(prefix) || message.author.bot) return;

            console.log("Message received! Contents: ", message.content);

            this.messageResponder.handle(message).then(() => {
                console.log("Response sent!");
            }).catch((error) => {
                console.log(error)
                console.log("Response not sent.")
            })
        });

        return this.client.login(this.token);
    }
}