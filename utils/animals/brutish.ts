import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 10, 0))
const iconURL = "https://runescape.wiki/images/4/44/Brutish_dinosaur_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/c/c2/Brutish_dinosaur_%28grown%29.png/303px-Brutish_dinosaur_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Brutish_dinosaur_(player-owned_farm)"

export const brutish: Dinosaur = {
    name: "Brutish Dinosaur",
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 1100,
    regularPenRate: 3300
}