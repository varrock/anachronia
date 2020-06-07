import { Moment } from "moment";

export default interface Dinosaur {
    readonly name: string
    readonly initial: Moment
    readonly icon: string
    readonly image: string
    readonly wiki: string
    readonly breedingPenRate: number
    readonly regularPenRate: number
}