import {Message} from "discord.js";
import {PingFinder} from "./pingFinder";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {dinosaurs} from "../../utils/"



@injectable()
export class MessageResponder {
    private pingFinder: PingFinder;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder
    ) {
        this.pingFinder = pingFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        const embed = {
            "title": dinosaurs.pavosaurus.name,
            "description": "The next breeding ticks occur at:",
            "url": dinosaurs.pavosaurus.wiki,
            "color": 2260654,
            "timestamp": new Date(),
            "footer": {
                "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
                "text": "footer text"
            },
            "thumbnail": {
                "url": dinosaurs.pavosaurus.icon
            },
            "image": {
                "url": dinosaurs.pavosaurus.image
            },
            "author": {
                "name": message.author.username,
                "url": "https://discordapp.com",
                "icon_url": message.author.avatarURL()
            },
            "fields": [
                {
                    "name": "Breeding Pen",
                    "value": "some of these properties have certain limits..."
                },
                {
                    "name": "Large Pen",
                    "value": "try exceeding some of them!"
                },

            ]
        };
        if (this.pingFinder.isPing(message.content)) {
            return message.reply({embed});
        }

        return Promise.reject();
    }
}