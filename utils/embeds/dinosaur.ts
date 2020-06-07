import Dinosaur from "../interfaces";
import {Message} from "discord.js";
import {nextBreedingTick, nextRegularTick} from "../calculations"

export default function generateDinosaurEmbed(dinosaurInfo: Dinosaur, message: Message){
    const {icon, image, initial, wiki, name} = dinosaurInfo;
    return {
        "title": name,
        "description": "The next breeding ticks occur at:",
        "url": wiki,
        "color": 2260654,
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.avatarURL(),
            "text": message.author.username
        },
        "thumbnail": {
            "url": icon
        },
        "image": {
            "url": image
        },
        // "author": {
        //     "name": message.author.username,
        //     "url": "https://discordapp.com",
        //     "icon_url": message.author.avatarURL()
        // },
        "fields": [
            {
                "name": "Breeding Pen",
                "value": nextBreedingTick(dinosaurInfo)
            },
            {
                "name": "Large Pen",
                "value": nextRegularTick(dinosaurInfo)
            },

        ]
    };
}