import * as moment from 'moment';
import {Moment} from 'moment';

export default function humaniseTime(nextTick: Moment, eta: boolean = true): string {
    const currentMoment = moment.utc();
    const partialHours = Math.floor(nextTick.diff(currentMoment, 'minutes')/60);
    const partialMinutes = nextTick.diff(currentMoment, 'minutes') % 60;
    let hoursString = partialHours ? `${partialHours} hours` : '';
    const etaString = eta ? "**ETA**: " : "";
    if (partialHours === 1) {
        hoursString = hoursString.substring(0, hoursString.length - 1);
    }
    let minutesString = partialMinutes ? `${partialMinutes} minutes` : '';
    if (partialMinutes === 1) {
        minutesString = minutesString.substring(0, minutesString.length - 1);
    }
    if (hoursString && minutesString) {
        return etaString + `*${hoursString}, ${minutesString}*`;
    } else if (hoursString && !minutesString) {
        return etaString + `*${hoursString}*`;
    } else if (!hoursString && minutesString) {
        return etaString + `*${minutesString}*`;
    } else {
        return etaString + "*The breed tick is now*";
    }
}