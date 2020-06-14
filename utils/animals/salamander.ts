import * as moment from 'moment'
import {Dinosaur} from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 0, 0))
const iconURL = "https://runescape.wiki/images/0/04/Green_salamander_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/thumb/e/e4/Green_salamander_%28NPC%29.png/301px-Green_salamander_%28NPC%29.png"
const wikiURL = "https://runescape.wiki/w/Salamander_(player-owned_farm)"

export const salamander: Dinosaur = {
    name: "Salamander",
    penType: 'Small',
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 600,
    regularPenRate: 900
}