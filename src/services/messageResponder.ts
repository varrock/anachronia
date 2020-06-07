import {Message} from "discord.js";
import {PavosaurusFinder, BrutishFinder, ArcaneFinder, ScimitopFinder, JadinkoFinder} from "../services";
import {inject, injectable} from "inversify";
import {TYPES} from "../types";
import {dinosaurs, generateDinosaurEmbed} from "../../utils/"


@injectable()
export class MessageResponder {
    private pavosaurusFinder: PavosaurusFinder;
    private brutishFinder: BrutishFinder;
    private arcaneFinder: ArcaneFinder;
    private scimitopFinder: ScimitopFinder;
    private jadinkoFinder: JadinkoFinder;

    constructor(
        @inject(TYPES.PavosaurusFinder) pavosaurusFinder: PavosaurusFinder,
        @inject(TYPES.BrutishFinder) brutishFinder: BrutishFinder,
        @inject(TYPES.ArcaneFinder) arcaneFinder: ArcaneFinder,
        @inject(TYPES.ScimitopFinder) scimitopFinder: ScimitopFinder,
        @inject(TYPES.JadinkoFinder) jadinkoFinder: JadinkoFinder,

    ) {
        this.pavosaurusFinder = pavosaurusFinder;
        this.brutishFinder = brutishFinder;
        this.arcaneFinder = arcaneFinder;
        this.scimitopFinder = scimitopFinder;
        this.jadinkoFinder = jadinkoFinder;
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

        if (this.jadinkoFinder.isJadinko(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.jadinko, message)});
        }

        return Promise.reject();
    }
}