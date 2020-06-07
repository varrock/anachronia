import {injectable} from "inversify";

@injectable()
export class BrutishFinder {

    private regexp = /brutish|brutish dinosaur|bru/;

    public isBrutish(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}