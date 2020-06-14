import humaniseTime from "./humaniseTime";
import {Message} from "discord.js";
import {totalInterfaceList} from "../constants";
import {Dinosaur, DinosaurElement, DinosaurMoment, TickElement} from "../interfaces";
import {getInterfacesFromRoles, buildTickString, generateUnsortedArray} from "./index";

// We only need to sort 7 'sets' of dinosaurs instead of the full 14 as some share ticks.

function sortedBreedingTicks(interfaceList: Dinosaur[] = totalInterfaceList): DinosaurElement[] {
    let unsortedArray: DinosaurMoment[] = generateUnsortedArray(interfaceList, true)
    let sortedMomentArray = unsortedArray.sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value))
    let sortedArray: DinosaurElement[] = sortedMomentArray.map(item => ({
        name: item.name,
        value: humaniseTime(item.value, false)
    }))
    return sortedArray
}

function sortedRegularTicks(interfaceList: Dinosaur[] = totalInterfaceList): DinosaurElement[] {
    let unsortedArray: DinosaurMoment[] = generateUnsortedArray(interfaceList, false)
    let sortedMomentArray = unsortedArray.sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value))
    let sortedArray: DinosaurElement[] = sortedMomentArray.map(item => ({
        name: item.name,
        value: humaniseTime(item.value, false)
    }))
    return sortedArray
}

function sortedTicks(): TickElement[] {
    return [
        {
            name: "Breeding Pen",
            value: buildTickString(sortedBreedingTicks()),
            inline: false
        }, {
            name: "Regular Pen",
            value: buildTickString(sortedRegularTicks()),
            inline: false
        }
    ]

}

function sortedPersonalTicks(message: Message) {
    const interfaceList = getInterfacesFromRoles(message);


}

export {
    sortedBreedingTicks,
    sortedRegularTicks,
    sortedTicks
}