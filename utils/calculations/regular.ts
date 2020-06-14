import {Dinosaur} from "../interfaces";
import {Moment} from "moment";
import * as moment from 'moment';

export default function nextRegularTick(dinosaurInfo: Dinosaur): Moment{
    let nextMoment = dinosaurInfo.initial.clone();
    const currentMoment = moment.utc();
    while (!nextMoment.isAfter((currentMoment))) {
        nextMoment.add(dinosaurInfo.regularPenRate, 'minutes')
    }
    return nextMoment
}