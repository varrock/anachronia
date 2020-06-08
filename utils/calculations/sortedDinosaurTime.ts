import nextBreedingTick from "./breeding";
import nextRegularTick from "./regular";
import {
    pavosaurus,
    brutish,
    arcane,
    scimitops,
    jadinko,
    varanusaur,
    salamander,
    frog,
    malletops,
    oculi,
    spicati,
    asciatops,
    bagrada,
    corbicula
} from "../animals"

// We only need to sort 7 'sets' of dinosaurs instead of the full 14 as some share ticks.

// let unsortedArray = []
// unsortedArray.push({
//     name: frog.name,
//     nextBreeding: nextBreedingTick(frog),
//     nextLarge: nextRegularTick(frog)
// })
// unsortedArray.push({
//     name: salamander.name,
//     nextBreeding: nextBreedingTick(salamander),
//     nextLarge: nextRegularTick(salamander)
// })
// unsortedArray.push({
//     name: pavosaurus.name,
//     nextBreeding: nextBreedingTick(pavosaurus),
//     nextLarge: nextRegularTick(pavosaurus)
// })
// unsortedArray.push({
//     name: "Asciatops/Bagrada/Corbicula/Spicati",
//     nextBreeding: nextBreedingTick(spicati),
//     nextLarge: nextRegularTick(malletops)
// })
// unsortedArray.push({
//     name: "Malletops/Oculi",
//     nextBreeding: nextBreedingTick(malletops),
//     nextLarge: nextRegularTick(malletops)
// })
// unsortedArray.push({
//     name: "Arcane/Brutish/Scimitops",
//     nextBreeding: nextBreedingTick(arcane),
//     nextLarge: nextRegularTick(arcane)
// })
// unsortedArray.push({
//     name: varanusaur.name,
//     nextBreeding: nextBreedingTick(varanusaur),
//     nextLarge: nextRegularTick(varanusaur)
// })

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
    return sortedArray
}

export {
    sortedBreedingTicks
}


// export default interface Dinosaur {
//     readonly name: string
//     readonly penType: string
//     readonly initial: Moment
//     readonly icon: string
//     readonly image: string
//     readonly wiki: string
//     readonly breedingPenRate: number
//     readonly regularPenRate: number
// }