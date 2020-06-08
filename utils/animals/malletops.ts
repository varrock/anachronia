import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 6, 9, 0))
const iconURL = "https://runescape.wiki/images/d/d0/Malletops_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/5/58/Malletops_%28grown%29.png/405px-Malletops_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Malletops_(player-owned_farm)"

export const malletops: Dinosaur = {
    name: "Malletops",
    penType: "Large",
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1300,
    regularPenRate: 3900
}