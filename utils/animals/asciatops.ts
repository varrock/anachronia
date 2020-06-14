import * as moment from 'moment'
import {Dinosaur} from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 0, 0))
const iconURL = "https://runescape.wiki/images/a/af/Asciatops_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/a/a5/Asciatops_%28grown%29.png/300px-Asciatops_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Asciatops_(player-owned_farm)"

export const asciatops: Dinosaur = {
    name: "Asciatops",
    penType: "Large",
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1200,
    regularPenRate: 3600
}