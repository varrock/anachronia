import {injectable} from "inversify";

@injectable()
export class RegularFinder {

    private regexp = /reg|regular/;

    public isRegular(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}