import {injectable} from "inversify";

@injectable()
export class SalamanderFinder {

    private regexp = /sal|salamander|sala/;

    public isSalamander(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}