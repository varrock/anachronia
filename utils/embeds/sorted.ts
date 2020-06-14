import {Message} from "discord.js";
import {sortedBreedingTicks, sortedRegularTicks, sortedTicks} from "../calculations";

function generateSortedBreedingEmbed(message: Message): object {
    return {
        "title": "Upcoming Breeding Pen Ticks",
        "description": "The upcoming **Breeding** Pen ticks for all Ranch Out of Time animals are:",
        "url": "https://runescape.wiki/w/Anachronia_Dinosaur_Farm#Breeding",
        "color": 2260654,
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.avatarURL(),
            "text": message.author.username
        },
        "image": {
            "url": "https://runescape.wiki/images/thumb/f/fd/Ranch_Out_of_Time.png/600px-Ranch_Out_of_Time.png"
        },
        "fields": [
            sortedBreedingTicks()
        ]
    };
}

function generateSortedRegularEmbed(message: Message): object {
    return {
        "title": "Upcoming Regular Pen Ticks",
        "description": "The upcoming **Regular** Pen ticks for all Ranch Out of Time animals are:",
        "url": "https://runescape.wiki/w/Anachronia_Dinosaur_Farm#Breeding",
        "color": 2260654,
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.avatarURL(),
            "text": message.author.username
        },
        "image": {
            "url": "https://runescape.wiki/images/thumb/f/fd/Ranch_Out_of_Time.png/600px-Ranch_Out_of_Time.png"
        },
        "fields": [
            sortedRegularTicks()
        ]
    };
}

function generatedSortedEmbed(message: Message): object {
    return {
        "title": "Upcoming Pen Ticks",
        "description": "The upcoming ticks for all Ranch Out of Time animals are:",
        "url": "https://runescape.wiki/w/Anachronia_Dinosaur_Farm#Breeding",
        "color": 2260654,
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.avatarURL(),
            "text": message.author.username
        },
        "image": {
            "url": "https://runescape.wiki/images/thumb/f/fd/Ranch_Out_of_Time.png/600px-Ranch_Out_of_Time.png"
        },
        "fields": [
            sortedTicks()
        ]
    };
}

export {
    generateSortedBreedingEmbed,
    generateSortedRegularEmbed,
    generatedSortedEmbed
}