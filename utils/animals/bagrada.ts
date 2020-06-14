import * as moment from 'moment'
import {Dinosaur} from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 0, 0))
const iconURL = "https://runescape.wiki/images/c/c1/Bagrada_rex_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/9/96/Bagrada_rex_%28grown%29.png/300px-Bagrada_rex_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Bagrada_rex_(player-owned_farm)"

export const bagrada: Dinosaur = {
    name: "Bagrada Rex",
    penType: "Large",
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1200,
    regularPenRate: 3600
}