import nextBreedingTick from "./breeding";
import nextRegularTick from "./regular";
import humaniseTime from "./humaniseTime";
import {
    pavosaurus,
    arcane,
    jadinko,
    varanusaur,
    salamander,
    frog,
    malletops,
    spicati,
} from "../animals";
import {DinosaurElement, DinosaurMoment, TickElement} from "../interfaces";

// We only need to sort 7 'sets' of dinosaurs instead of the full 14 as some share ticks.

function sortedBreedingTicks(): DinosaurElement[] {
    let unsortedArray: DinosaurMoment[] = []
    unsortedArray.push({
        name: frog.name,
        value: nextBreedingTick(frog)
    })
    unsortedArray.push({
        name: salamander.name,
        value: nextBreedingTick(salamander)
    })
    unsortedArray.push({
        name: jadinko.name,
        value: nextBreedingTick(jadinko)
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
    let sortedMomentArray = unsortedArray.sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value))
    let sortedArray: DinosaurElement[] = sortedMomentArray.map(item => ({
        name: item.name,
        value: humaniseTime(item.value, false)
    }))
    return sortedArray
}

function sortedRegularTicks(): DinosaurElement[] {
    let unsortedArray: DinosaurMoment[] = []
    unsortedArray.push({
        name: frog.name,
        value: nextRegularTick(frog)
    })
    unsortedArray.push({
        name: salamander.name,
        value: nextRegularTick(salamander)
    })
    unsortedArray.push({
        name: jadinko.name,
        value: nextRegularTick(jadinko)
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
    let sortedMomentArray = unsortedArray.sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value))
    let sortedArray: DinosaurElement[] = sortedMomentArray.map(item => ({
        name: item.name,
        value: humaniseTime(item.value, false)
    }))
    return sortedArray
}

function buildTickString(sortedTicks: DinosaurElement[]): string {
    let tickString = "";
    sortedTicks.forEach(element => {
        tickString += `**${element.name}** - ${element.value}\n`
    })
    return tickString
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

export {
    sortedBreedingTicks,
    sortedRegularTicks,
    sortedTicks
}