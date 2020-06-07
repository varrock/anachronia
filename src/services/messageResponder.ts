import {Message} from "discord.js";
import {PingFinder} from "./pingFinder";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {dinosaurs, generateDinosaurEmbed} from "../../utils/"


@injectable()
export class MessageResponder {
    private pingFinder: PingFinder;

    constructor(
        @inject(TYPES.PingFinder) pingFinder: PingFinder
    ) {
        this.pingFinder = pingFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pingFinder.isPing(message.content)) {
            console.log(generateDinosaurEmbed(dinosaurs.pavosaurus, message));
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.pavosaurus, message)});
        }

        return Promise.reject();
    }
}