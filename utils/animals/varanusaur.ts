import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 6, 10, 40))
const iconURL = "https://runescape.wiki/images/1/10/Ripper_dinosaur_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/5/51/Ripper_dinosaur_%28grown%29.png/412px-Ripper_dinosaur_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Dinosaur_(player-owned_farm)"

export const varanusaur: Dinosaur = {
    name: "Varanusaur",
    penType: 'Medium',
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 800,
    regularPenRate: 2400
}