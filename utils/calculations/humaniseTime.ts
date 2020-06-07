import * as moment from 'moment';
import {Moment} from 'moment';

export default function humaniseTime(nextTick: Moment) {
    const currentMoment = moment.utc();
    const partialHours = Math.floor(nextTick.diff(currentMoment, 'minutes')/60);
    const partialMinutes = nextTick.diff(currentMoment, 'minutes') % 60;
    const hoursString = partialHours ? `${partialHours} hours` : '';
    const minutesString = partialMinutes ? `${partialMinutes} minutes` : '';
    if (hoursString && minutesString) {
        return `**ETA**: *${hoursString}, ${minutesString}*`;
    } else if (hoursString && !minutesString) {
        return `**ETA**: *${hoursString}*`;
    } else if (!hoursString && minutesString) {
        return `**ETA**: *${minutesString}*`;
    } else {
        return "**ETA**: *The breed tick is now*";
    }
}