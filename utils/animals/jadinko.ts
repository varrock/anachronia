import * as moment from 'moment'
import Dinosaur from "../interfaces";

// Initial Breeding Tick
const initialTick = moment.utc(Date.UTC(2020, 5, 6, 5, 40))
const iconURL = "https://runescape.wiki/images/d/d4/Common_jadinko_%28player-owned_farm%29.png"
const imageURL = "https://runescape.wiki/images/6/6e/Common_jadinko_%28grown%29.png"
const wikiURL = "https://runescape.wiki/w/Jadinko_(player-owned_farm)"

export const jadinko: Dinosaur = {
    name: "Jadinko",
    penType: 'Medium',
    initial: initialTick,
    icon: iconURL,
    image: imageURL,
    wiki: wikiURL,
    breedingPenRate: 700,
    regularPenRate: 2100
}