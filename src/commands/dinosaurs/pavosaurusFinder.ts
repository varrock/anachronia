import {injectable} from "inversify";

@injectable()
export class PavosaurusFinder {

    private regexp = /pavo|pavosaurus|pav|pavosaurus rex/;

    public isPavosaurus(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}