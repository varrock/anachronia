import {injectable} from "inversify";

@injectable()
export class FrogFinder {

    private regexp = /frog/;

    public isFrog(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}