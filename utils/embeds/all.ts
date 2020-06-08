import Dinosaur from "../interfaces";
import {Message} from "discord.js";
import {nextBreedingTick, nextRegularTick, humaniseTime} from "../calculations"

export default function generateDinosaurEmbed(dinosaurInfo: Dinosaur, message: Message) {
    const {name, penType, icon, image, wiki} = dinosaurInfo;
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
        "fields": [
            {
                "name": "Breeding Pen",
                "value": `${nextBreedingTick(dinosaurInfo).format('Do MMMM YYYY, HH:mm')} UTC\n`
                    + humaniseTime(nextBreedingTick(dinosaurInfo))
            },
            {
                "name": `${penType} Pen`,
                "value": `${nextRegularTick(dinosaurInfo).format('Do MMMM YYYY, HH:mm')} UTC\n`
                    + humaniseTime(nextRegularTick(dinosaurInfo))
            },

        ]
    };
}