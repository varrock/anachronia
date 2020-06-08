import {injectable} from "inversify";

@injectable()
export class OculiFinder {

    private regexp = /oculi|ocu|oculi apoterrasaur/;

    public isOculi(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}