import {injectable} from "inversify";

@injectable()
export class MalletopsFinder {

    private regexp = /mall|malle|malletops/;

    public isMalletop(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}