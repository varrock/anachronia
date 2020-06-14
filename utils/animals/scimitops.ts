import * as moment from 'moment'
import {Dinosaur} from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 10, 0))
const iconURL = "https://runescape.wiki/images/4/46/Scimitops_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/7/77/Scimitops_%28grown%29.png/340px-Scimitops_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Scimitops_(player-owned_farm)"

export const scimitops: Dinosaur = {
    name: "Scimitops",
    penType: 'Large',
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1100,
    regularPenRate: 3300
}