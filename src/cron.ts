import {totalInterfaceList} from "../utils/constants";
import {generateUnsortedArray} from "../utils/calculations";
import {DinosaurMoment} from "../utils/interfaces";
import * as moment from 'moment';

function validTicks(): object {
    let now = moment.utc();
    let sortedSmallPens, sortedMediumPens, sortedLargePens = [];

    // Array of Breeding Ticks that are occurring within 10 minutes.
    let breedingArray: DinosaurMoment[] = generateUnsortedArray(totalInterfaceList, true).map(element => {
        if (element.value.diff(now) <= 600000) {
            return element;
        }
    }).sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value));

    // Regular Ticks
    let regularArray: DinosaurMoment[] = generateUnsortedArray(totalInterfaceList, false).map(element => {
        if (element.value.diff(now) <= 600000) {
            return element;
        }
    }).sort((a: DinosaurMoment, b: DinosaurMoment) => a.value.diff(b.value));

    // Splitting Regular Ticks into Small/Medium/Large
    regularArray.forEach(element => {
        switch (element.name) {
            case "Arcane/Brutish/Scimitops":
            case "Asciatops/Bagrada/Corbicula/Spicati":
            case "Malletops/Oculi":
            case "Pavosaurus":
                sortedLargePens.push(element.name)
                break;
            case "Varanusaur":
            case "Jadinko":
                sortedMediumPens.push(element.name)
                break;
            default:
                sortedSmallPens.push(element.name)
        }
    })

    return {
        breeding: breedingArray && breedingArray.length ? breedingArray : undefined,
        small: sortedSmallPens && sortedSmallPens.length ? sortedSmallPens : undefined,
        medium: sortedMediumPens && sortedMediumPens.length ? sortedMediumPens : undefined,
        large: sortedLargePens && sortedLargePens.length ? sortedLargePens : undefined,
    }

}