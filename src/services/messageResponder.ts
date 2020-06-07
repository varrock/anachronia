import {Message} from "discord.js";
import {PavosaurusFinder, BrutishFinder, ArcaneFinder, ScimitopFinder} from "../services";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {dinosaurs, generateDinosaurEmbed} from "../../utils/"


@injectable()
export class MessageResponder {
    private pavosaurusFinder: PavosaurusFinder;
    private brutishFinder: BrutishFinder;
    private arcaneFinder: ArcaneFinder;
    private scimitopFinder: ScimitopFinder;

    constructor(
        @inject(TYPES.PavosaurusFinder) pavosaurusFinder: PavosaurusFinder,
        @inject(TYPES.BrutishFinder) brutishFinder: BrutishFinder,
        @inject(TYPES.ArcaneFinder) arcaneFinder: ArcaneFinder,
        @inject(TYPES.ScimitopFinder) scimitopFinder: ScimitopFinder,

    ) {
        this.pavosaurusFinder = pavosaurusFinder;
        this.brutishFinder = brutishFinder;
        this.arcaneFinder = arcaneFinder;
        this.scimitopFinder = scimitopFinder;
    }

    handle(message: Message): Promise<Message | Message[]> {
        if (this.pavosaurusFinder.isPavosaurus(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.pavosaurus, message)});
        }

        if (this.brutishFinder.isBrutish(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.brutish, message)});
        }

        if (this.arcaneFinder.isArcane(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.arcane, message)});
        }

        if (this.scimitopFinder.isScimitop(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.scimitops, message)});
        }

        return Promise.reject();
    }
}