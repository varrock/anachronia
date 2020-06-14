import { Moment } from "moment";

interface Dinosaur {
    readonly name: string
    readonly penType: string
    readonly initial: Moment
    readonly icon: string
    readonly image: string
    readonly wiki: string
    readonly breedingPenRate: number
    readonly regularPenRate: number
}

interface DinosaurMoment {
    name: string
    value: Moment
}

interface DinosaurElement {
    name: string;
    value: string;
}

export {
    Dinosaur,
    DinosaurMoment,
    DinosaurElement
}