import {Message} from "discord.js";
import {sortedBreedingTicks, sortedRegularTicks, sortedTicks, sortedPersonalTicks} from "../calculations";

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

function generateSortedPersonalEmbed(message: Message): object {
    const sortedTicks = sortedPersonalTicks(message)
    if (sortedTicks !== undefined) return {
        "title": "Upcoming Pen Ticks",
        "description": "The upcoming ticks for all selected Ranch Out of Time animals are:",
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
            sortedTicks
        ]
    };
    return {
        "title": "Upcoming Pen Ticks",
        "description": "You have not selected any Ranch Out of Time animals. To begin, please add yourself to any of the following roles:\n" +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Frog') ? message.guild.roles.cache.find(role => role.name === 'Frog').id : "Frog"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Salamander') ? message.guild.roles.cache.find(role => role.name === 'Salamander').id : "Salamander"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Jadinko') ? message.guild.roles.cache.find(role => role.name === 'Jadinko').id : "Jadinko"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Varanusaur') ? message.guild.roles.cache.find(role => role.name === 'Varanusaur').id : "Varanusaur"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Arcane/Brutish/Scimitops') ? message.guild.roles.cache.find(role => role.name === 'Arcane/Brutish/Scimitops').id : "Arcane/Brutish/Scimitops"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Asciatops/Bagrada/Corbicula/Spicati') ? message.guild.roles.cache.find(role => role.name === 'Asciatops/Bagrada/Corbicula/Spicati').id : "Asciatops/Bagrada/Corbicula/Spicati"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Malletops/Oculi') ? message.guild.roles.cache.find(role => role.name === 'Malletops/Oculi').id : "Malletops/Oculi"}>\n` +
            `<@&${message.guild.roles.cache.find(role => role.name === 'Pavosaurus') ? message.guild.roles.cache.find(role => role.name === 'Pavosaurus').id : "Pavosaurus"}>\n`,
        "url": "https://runescape.wiki/w/Anachronia_Dinosaur_Farm#Breeding",
        "color": 2260654,
        "timestamp": new Date(),
        "footer": {
            "icon_url": message.author.avatarURL(),
            "text": message.author.username
        },
        "image": {
            "url": "https://runescape.wiki/images/thumb/f/fd/Ranch_Out_of_Time.png/600px-Ranch_Out_of_Time.png"
        }
    };

}

export {
    generateSortedBreedingEmbed,
    generateSortedRegularEmbed,
    generatedSortedEmbed,
    generateSortedPersonalEmbed
}