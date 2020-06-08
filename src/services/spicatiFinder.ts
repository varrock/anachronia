import {injectable} from "inversify";

@injectable()
export class SpicatiFinder {

    private regexp = /spic|spicati|spicati apoterrasaur|spi/;

    public isSpicati(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}