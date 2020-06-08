import nextBreedingTick from "./breeding";
import nextRegularTick from "./regular";
import humaniseTime from "./humaniseTime";
import {
    pavosaurus,
    arcane,
    varanusaur,
    salamander,
    frog,
    malletops,
    spicati,
} from "../animals";

// We only need to sort 7 'sets' of dinosaurs instead of the full 14 as some share ticks.

function sortedBreedingTicks() {
    let unsortedArray = []
    unsortedArray.push({
        name: frog.name,
        nextBreeding: nextBreedingTick(frog)
    })
    unsortedArray.push({
        name: salamander.name,
        nextBreeding: nextBreedingTick(salamander)
    })
    unsortedArray.push({
        name: pavosaurus.name,
        nextBreeding: nextBreedingTick(pavosaurus)
    })
    unsortedArray.push({
        name: "Asciatops/Bagrada/Corbicula/Spicati",
        nextBreeding: nextBreedingTick(spicati)
    })
    unsortedArray.push({
        name: "Malletops/Oculi",
        nextBreeding: nextBreedingTick(malletops)
    })
    unsortedArray.push({
        name: "Arcane/Brutish/Scimitops",
        nextBreeding: nextBreedingTick(arcane)
    })
    unsortedArray.push({
        name: varanusaur.name,
        nextBreeding: nextBreedingTick(varanusaur)
    })
    let sortedArray = unsortedArray.sort((a,b) => a.nextBreeding.diff(b.nextBreeding))
    sortedArray.forEach(element => {
        element.nextBreeding = humaniseTime(element.nextBreeding, false)
    })
    return sortedArray
}

function sortedRegularTicks() {
    let unsortedArray = []
    unsortedArray.push({
        name: frog.name,
        nextRegular: nextRegularTick(frog)
    })
    unsortedArray.push({
        name: salamander.name,
        nextRegular: nextRegularTick(salamander)
    })
    unsortedArray.push({
        name: pavosaurus.name,
        nextRegular: nextRegularTick(pavosaurus)
    })
    unsortedArray.push({
        name: "Asciatops/Bagrada/Corbicula/Spicati",
        nextRegular: nextRegularTick(malletops)
    })
    unsortedArray.push({
        name: "Malletops/Oculi",
        nextRegular: nextRegularTick(malletops)
    })
    unsortedArray.push({
        name: "Arcane/Brutish/Scimitops",
        nextRegular: nextRegularTick(arcane)
    })
    unsortedArray.push({
        name: varanusaur.name,
        nextRegular: nextRegularTick(varanusaur)
    })
    let sortedArray = unsortedArray.sort((a,b) => a.nextRegular.diff(b.nextRegular))
    sortedArray.forEach(element => {
        element.nextRegular = humaniseTime(element.nextRegular, false)
    })
    return sortedArray
}

export {
    sortedBreedingTicks,
    sortedRegularTicks
}