import nextBreedingTick from "./breeding";
import nextRegularTick from "./regular"
import humaniseTime from "./humaniseTime";
import {sortedRegularTicks, sortedBreedingTicks, sortedTicks} from "./sortedDinosaurTime";
import {Message} from "discord.js";
import {Dinosaur} from "../interfaces";
import {arcane, frog, jadinko, malletops, pavosaurus, salamander, spicati, varanusaur} from "../animals";

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
    getInterfacesFromRoles
}