import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 5, 18, 0))
const iconURL = "https://runescape.wiki/images/8/86/Pavosaurus_rex_icon.png"
const imageURL = "https://runescape.wiki/images/thumb/8/89/Pavosaurus_rex.png/300px-Pavosaurus_rex.png"
const wikiURL = "https://runescape.wiki/w/Pavosaurus_rex"

export const pavosaurus: Dinosaur = {
    name: "Pavosaurus Rex",
    penType: "Large",
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1400,
    regularPenRate: 4200
}