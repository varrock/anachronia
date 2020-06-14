import * as moment from 'moment'
import {Dinosaur} from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 10, 0))
const iconURL = "https://runescape.wiki/images/3/3f/Arcane_apoterrasaur_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/6/67/Arcane_apoterrasaur_%28grown%29.png/236px-Arcane_apoterrasaur_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Arcane_apoterrasaur_(player-owned_farm)"

export const arcane: Dinosaur = {
    name: "Arcane Apoterrasaur",
    penType: 'Large',
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1100,
    regularPenRate: 3300
}