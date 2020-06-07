import {Message} from "discord.js";
import {PavosaurusFinder, BrutishFinder} from "../services";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {dinosaurs, generateDinosaurEmbed} from "../../utils/"


@injectable()
export class MessageResponder {
    private pavosaurusFinder: PavosaurusFinder;
    private brutishFinder: BrutishFinder

    constructor(
        @inject(TYPES.PavosaurusFinder) pavosaurusFinder: PavosaurusFinder,
        @inject(TYPES.BrutishFinder) brutishFinder: BrutishFinder

    ) {
        this.pavosaurusFinder = pavosaurusFinder;
        this.brutishFinder = brutishFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pavosaurusFinder.isPavosaurus(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.pavosaurus, message)});
        }

        if (this.brutishFinder.isBrutish(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.brutish, message)});
        }

        return Promise.reject();
    }
}