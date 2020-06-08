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
        value: nextBreedingTick(frog)
    })
    unsortedArray.push({
        name: salamander.name,
        value: nextBreedingTick(salamander)
    })
    unsortedArray.push({
        name: pavosaurus.name,
        value: nextBreedingTick(pavosaurus)
    })
    unsortedArray.push({
        name: "Asciatops/Bagrada/Corbicula/Spicati",
        value: nextBreedingTick(spicati)
    })
    unsortedArray.push({
        name: "Malletops/Oculi",
        value: nextBreedingTick(malletops)
    })
    unsortedArray.push({
        name: "Arcane/Brutish/Scimitops",
        value: nextBreedingTick(arcane)
    })
    unsortedArray.push({
        name: varanusaur.name,
        value: nextBreedingTick(varanusaur)
    })
    let sortedArray = unsortedArray.sort((a,b) => a.value.diff(b.value))
    sortedArray.forEach(element => {
        element.value = humaniseTime(element.value, false)
    })
    return sortedArray
}

function sortedRegularTicks() {
    let unsortedArray = []
    unsortedArray.push({
        name: frog.name,
        value: nextRegularTick(frog)
    })
    unsortedArray.push({
        name: salamander.name,
        value: nextRegularTick(salamander)
    })
    unsortedArray.push({
        name: pavosaurus.name,
        value: nextRegularTick(pavosaurus)
    })
    unsortedArray.push({
        name: "Asciatops/Bagrada/Corbicula/Spicati",
        value: nextRegularTick(malletops)
    })
    unsortedArray.push({
        name: "Malletops/Oculi",
        value: nextRegularTick(malletops)
    })
    unsortedArray.push({
        name: "Arcane/Brutish/Scimitops",
        value: nextRegularTick(arcane)
    })
    unsortedArray.push({
        name: varanusaur.name,
        value: nextRegularTick(varanusaur)
    })
    let sortedArray = unsortedArray.sort((a,b) => a.value.diff(b.value))
    sortedArray.forEach(element => {
        element.value = humaniseTime(element.value, false)
    })
    return sortedArray
}

export {
    sortedBreedingTicks,
    sortedRegularTicks
}