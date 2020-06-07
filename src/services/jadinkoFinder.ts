import {injectable} from "inversify";

@injectable()
export class JadinkoFinder {

    private regexp = /jadinko|jad|jadinkos/;

    public isJadinko(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}