import {Message} from "discord.js";
import {PingFinder} from "./pingFinder";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";

const embed = {
    "title": "title ~~(did you know you can have markdown here too?)~~",
    "description": "this supports [named links](https://discordapp.com) on top of the previously shown subset of markdown. ```\nyes, even code blocks```",
    "url": "https://discordapp.com",
    "color": 2260654,
    "timestamp": "2020-06-07T03:46:57.028Z",
    "footer": {
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png",
        "text": "footer text"
    },
    "thumbnail": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "image": {
        "url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "author": {
        "name": "author name",
        "url": "https://discordapp.com",
        "icon_url": "https://cdn.discordapp.com/embed/avatars/0.png"
    },
    "fields": [
        {
            "name": "🤔",
            "value": "some of these properties have certain limits..."
        },
        {
            "name": "😱",
            "value": "try exceeding some of them!"
        },
        {
            "name": "🙄",
            "value": "an informative error should show up, and this view will remain as-is until all issues are fixed"
        },
        {
            "name": "<:thonkang:219069250692841473>",
            "value": "these last two",
            "inline": true
        },
        {
            "name": "<:thonkang:219069250692841473>",
            "value": "are inline fields",
            "inline": true
        }
    ]
};

@injectable()
export class MessageResponder {
    private pingFinder: PingFinder;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder
    ) {
        this.pingFinder = pingFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pingFinder.isPing(message.content)) {
            return message.reply({embed});
        }

        return Promise.reject();
    }
}