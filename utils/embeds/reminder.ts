import {Message} from "discord.js";
import {validTicks} from "../calculations";

function generateReminderEmbed(message: Message): object | null {
    let breeding, small, medium, large = validTicks();
    if (breeding === undefined && small === undefined && medium === undefined && large === undefined) return null;
    return {
        "title": "Upcoming Pen Ticks",
        "description": "The following animals inside the corresponding pens are breeding in 10 minutes:",
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

    if (sortedTicks !== undefined) return
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