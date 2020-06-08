import {injectable} from "inversify";

@injectable()
export class BreedingFinder {

    private regexp = /breeding|breed/;

    public isBreeding(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}