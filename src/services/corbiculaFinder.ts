import {injectable} from "inversify";

@injectable()
export class CorbiculaFinder {

    private regexp = /corb|corbicula|corbicula rex/;

    public isCorbicula(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}