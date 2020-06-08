import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 6, 9, 0))
const iconURL = "https://runescape.wiki/images/8/84/Oculi_apoterrasaur_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/d/d6/Oculi_apoterrasaur_%28grown%29.png/300px-Oculi_apoterrasaur_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Oculi_apoterrasaur_(player-owned_farm)"

export const oculi: Dinosaur = {
    name: "Oculi apoterrasaur",
    penType: "Large",
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1300,
    regularPenRate: 3900
}