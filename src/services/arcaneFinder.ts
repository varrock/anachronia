import {injectable} from "inversify";

@injectable()
export class ArcaneFinder {

    private regexp = /arc|arcane|arcane apoterrasaur/;

    public isArcane(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}