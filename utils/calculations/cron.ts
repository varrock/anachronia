import {totalInterfaceList} from "../constants";
import {generateUnsortedArray} from "./index";
import {DinosaurMoment} from "../interfaces";
import * as moment from 'moment';
import {TextChannel} from "discord.js";

function validTicks() {
    let now = moment.utc();
    let sortedSmallPens = [], sortedMediumPens = [], sortedLargePens = [];

    // Array of Breeding Ticks that are occurring within 10 minutes.
    let breedingArray: DinosaurMoment[] = generateUnsortedArray(totalInterfaceList, true)
        .filter(element => element.value.diff(now) <= 600000)
        .sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value));

    // Regular Ticks
    let regularArray: DinosaurMoment[] = generateUnsortedArray(totalInterfaceList, false)
        .filter(element => element.value.diff(now) <= 600000)
        .sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value));

    // Splitting Regular Ticks into Small/Medium/Large
    if (regularArray && regularArray.length) {
        regularArray.forEach(element => {
            if (element.name === "Arcane/Brutish/Scimitops" || element.name === "Asciatops/Bagrada/Corbicula/Spicati" || element.name === "Malletops/Oculi" || element.name === "Pavosaurus") {
                sortedLargePens.push(element.name)
            } else if (element.name === "Varanusaur" || element.name === "Jadinko") {
                sortedMediumPens.push(element.name)
            } else {
                sortedSmallPens.push(element.name)
            }
        })
    }

    return {
        breeding: breedingArray && breedingArray.length ? breedingArray : undefined,
        small: sortedSmallPens && sortedSmallPens.length ? sortedSmallPens : undefined,
        medium: sortedMediumPens && sortedMediumPens.length ? sortedMediumPens : undefined,
        large: sortedLargePens && sortedLargePens.length ? sortedLargePens : undefined,
    }

}

function createMentionString(animalNameArray: string[], channel: TextChannel): string {
    let animalString = "";
    animalNameArray.forEach(animalObject => {
        let animalName = channel.guild.roles.cache.find(role => role.name === animalObject) ? channel.guild.roles.cache.find(role => role.name === animalObject).id : animalObject
        animalString += `<@&${animalName}>\n`
    })
    return animalString
}

function createMentionStringMessage(channel: TextChannel): string {
    let {breeding, small, medium, large} = validTicks();
    let breedingArray = breeding !== undefined ? breeding.map(element => element.name) : []
    small = small !== undefined ? small : [];
    medium = medium !== undefined ? medium : [];
    large = large !== undefined ? large : [];
    return createMentionString(breedingArray.concat(small, medium, large), channel)
}

export {
    validTicks,
    createMentionString,
    createMentionStringMessage
}