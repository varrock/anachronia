import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 7, 10, 0))
const iconURL = "https://runescape.wiki/images/c/ca/Common_green_frog.png"
const imageURL = "https://runescape.wiki/images/4/49/Common_green_frog_%28NPC%29.png"
const wikiURL = "https://runescape.wiki/w/Frog_(Player-owned_farm)"

export const frog: Dinosaur = {
    name: "Frog",
    penType: 'Small',
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 200,
    regularPenRate: 300
}