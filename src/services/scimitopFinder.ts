import {injectable} from "inversify";

@injectable()
export class ScimitopFinder {

    private regexp = /scimi|scimitops|scim/;

    public isScimitop(stringToSearch: string): boolean {
        return stringToSearch.search(this.regexp) >= 0;
    }
}