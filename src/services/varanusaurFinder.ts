import {injectable} from "inversify";

@injectable()
export class VaranusaurFinder {

    private regexp = /vara|varanusaur|var/;

    public isVaranusaur(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}