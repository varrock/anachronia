import {Client, Message} from "discord.js";
import {inject, injectable} from "inversify";
import {TYPES} from "./types";
import {MessageResponder} from "./services/messageResponder";
import {prefix} from '../utils';

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
            this.client.user.setActivity("with dinosaurs!");
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