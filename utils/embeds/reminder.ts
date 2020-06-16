import {TextChannel} from "discord.js";
import {createMentionString, validTicks} from "../calculations";

function generateReminderEmbed(channel: TextChannel): object | null {
    let {breeding, small, medium, large} = validTicks();
    if (breeding === undefined && small === undefined && medium === undefined && large === undefined) return null;
    let fields = []
    if (breeding !== undefined) {
        fields.push({
            "name": "Breeding Pen",
            "value": createMentionString(breeding.map(element => element.name), channel)
        })
    }
    if (small !== undefined) {
        fields.push({
            "name": "Small Pen",
            "value": createMentionString(small, channel)
        })
    }
    if (medium !== undefined) {
        fields.push({
            "name": "Medium Pen",
            "value": createMentionString(medium, channel)
        })
    }
    if (large !== undefined) {
        fields.push({
            "name": "Large Pen",
            "value": createMentionString(large, channel)
        })
    }
    return {
        "title": "Upcoming Pen Ticks",
        "description": "The following animals inside the corresponding pens are breeding in 10 minutes:",
        "url": "https://runescape.wiki/w/Anachronia_Dinosaur_Farm#Breeding",
        "color": 2260654,
        "timestamp": new Date(),
        "footer": {
            "icon_url": "https://runescape.wiki/images/f/f2/Prehistoric_Potterington_chathead.png",
            "text": "Prehistoric Potterington"
        },
        "image": {
            "url": "https://runescape.wiki/images/thumb/f/fd/Ranch_Out_of_Time.png/600px-Ranch_Out_of_Time.png"
        },
        "fields": fields
    };
}

export {
    generateReminderEmbed
}