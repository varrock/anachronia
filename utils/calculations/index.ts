import nextBreedingTick from "./breeding";
import nextRegularTick from "./regular"
import humaniseTime from "./humaniseTime";
import {sortedRegularTicks, sortedBreedingTicks, sortedTicks, sortedPersonalTicks} from "./sortedDinosaurTime";
import {Message} from "discord.js";
import {Dinosaur, DinosaurElement, DinosaurMoment} from "../interfaces";
import {arcane, frog, jadinko, malletops, pavosaurus, salamander, spicati, varanusaur} from "../animals";
import {totalInterfaceList} from "../constants";
import {validTicks, createMentionString} from "./cron";

function generateUnsortedArray(interfaceList: Dinosaur[] = totalInterfaceList, breeding: boolean = true): DinosaurMoment[] {
    let unsortedArray: DinosaurMoment[] = []
    interfaceList.forEach(element => {
        if (breeding) {
            switch (element) {
                case arcane:
                    unsortedArray.push({
                        name: "Arcane/Brutish/Scimitops",
                        value: nextBreedingTick(arcane)
                    })
                    break;
                case spicati:
                    unsortedArray.push({
                        name: "Asciatops/Bagrada/Corbicula/Spicati",
                        value: nextBreedingTick(spicati)
                    })
                    break;
                case malletops:
                    unsortedArray.push({
                        name: "Malletops/Oculi",
                        value: nextBreedingTick(malletops)
                    })
                    break;
                default:
                    unsortedArray.push({
                        name: element.name,
                        value: nextBreedingTick(element)
                    })
            }
        } else {
            switch (element) {
                case arcane:
                    unsortedArray.push({
                        name: "Arcane/Brutish/Scimitops",
                        value: nextRegularTick(arcane)
                    })
                    break;
                case spicati:
                    unsortedArray.push({
                        name: "Asciatops/Bagrada/Corbicula/Spicati",
                        value: nextRegularTick(spicati)
                    })
                    break;
                case malletops:
                    unsortedArray.push({
                        name: "Malletops/Oculi",
                        value: nextRegularTick(malletops)
                    })
                    break;
                default:
                    unsortedArray.push({
                        name: element.name,
                        value: nextRegularTick(element)
                    })
            }
        }
    })
    return unsortedArray
}


function buildTickString(sortedTicks: DinosaurElement[]): string {
    let tickString = "";
    sortedTicks.forEach(element => {
        tickString += `**${element.name}** - ${element.value}\n`
    })
    return tickString
}

function getInterfacesFromRoles(message: Message): Dinosaur[] {
    let interfaceList: Dinosaur[] = [];
    let roleList = message.member.roles.cache.map(role => role.name);
    if (roleList.includes("Frog")) interfaceList.push(frog);
    if (roleList.includes("Salamander")) interfaceList.push(salamander);
    if (roleList.includes("Jadinko")) interfaceList.push(jadinko);
    if (roleList.includes("Varanusaur")) interfaceList.push(varanusaur);
    if (roleList.includes("Arcane/Brutish/Scimitops")) interfaceList.push(arcane);
    if (roleList.includes("Asciatops/Bagrada/Corbicula/Spicati")) interfaceList.push(spicati);
    if (roleList.includes("Malletops/Oculi")) interfaceList.push(malletops);
    if (roleList.includes("Pavosaurus")) interfaceList.push(pavosaurus);
    return interfaceList
}

export {
    nextBreedingTick,
    nextRegularTick,
    humaniseTime,
    sortedRegularTicks,
    sortedBreedingTicks,
    sortedTicks,
    buildTickString,
    getInterfacesFromRoles,
    generateUnsortedArray,
    sortedPersonalTicks,
    validTicks,
    createMentionString
}