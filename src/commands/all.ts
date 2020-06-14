import {injectable} from "inversify";

@injectable()
export class AllFinder {

    private regexp = /all/;

    public isAll(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}