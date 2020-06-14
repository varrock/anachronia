import {injectable} from "inversify";

@injectable()
export class MeFinder {

    private regexp = /me/;

    public isMe(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}