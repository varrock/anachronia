import {injectable} from "inversify";

@injectable()
export class BagradaFinder {

    private regexp = /bag|bagrada|bagrada rex/;

    public isBagrada(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}