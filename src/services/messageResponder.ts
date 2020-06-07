import {Message} from "discord.js";
import {PavosaurusFinder} from "./pavosaurusFinder";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {dinosaurs, generateDinosaurEmbed} from "../../utils/"


@injectable()
export class MessageResponder {
    private pavosaurusFinder: PavosaurusFinder;

    constructor(
        @inject(TYPES.PavosaurusFinder) pavosaurusFinder: PavosaurusFinder
    ) {
        this.pavosaurusFinder = pavosaurusFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pavosaurusFinder.isPavosaurus(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.pavosaurus, message)});
        }

        return Promise.reject();
    }
}