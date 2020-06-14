import {Dinosaur} from "../interfaces";
import * as moment from 'moment';

export default function nextBreedingTick(dinosaurInfo: Dinosaur){
    let nextMoment = dinosaurInfo.initial.clone();
    const currentMoment = moment.utc();
    while (!nextMoment.isAfter((currentMoment))) {
        nextMoment.add(dinosaurInfo.breedingPenRate, 'minutes')
    }
    return nextMoment
}