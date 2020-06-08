import {injectable} from "inversify";

@injectable()
export class AsciatopsFinder {

    private regexp = /asciatops|asc|ascia/;

    public isAsciatops(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}