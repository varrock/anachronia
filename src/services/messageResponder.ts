import {Message} from "discord.js";
import {
    PavosaurusFinder,
    BrutishFinder,
    ArcaneFinder,
    ScimitopFinder,
    JadinkoFinder,
    VaranusaurFinder,
    SalamanderFinder,
    FrogFinder,
    MalletopsFinder,
    OculiFinder,
} from "../services";
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
    private varanusaurFinder: VaranusaurFinder;
    private salamanderFinder: SalamanderFinder;
    private frogFinder: FrogFinder;
    private malletopsFinder: MalletopsFinder;
    private oculiFinder: OculiFinder;

    constructor(
        @inject(TYPES.PavosaurusFinder) pavosaurusFinder: PavosaurusFinder,
        @inject(TYPES.BrutishFinder) brutishFinder: BrutishFinder,
        @inject(TYPES.ArcaneFinder) arcaneFinder: ArcaneFinder,
        @inject(TYPES.ScimitopFinder) scimitopFinder: ScimitopFinder,
        @inject(TYPES.JadinkoFinder) jadinkoFinder: JadinkoFinder,
        @inject(TYPES.VaranusaurFinder) varanusaurFinder: VaranusaurFinder,
        @inject(TYPES.SalamanderFinder) salamanderFinder: SalamanderFinder,
        @inject(TYPES.FrogFinder) frogFinder: FrogFinder,
        @inject(TYPES.MalletopsFinder) malletopsFinder: MalletopsFinder,
        @inject(TYPES.OculiFinder) oculiFinder: OculiFinder,

    ) {
        this.pavosaurusFinder = pavosaurusFinder;
        this.brutishFinder = brutishFinder;
        this.arcaneFinder = arcaneFinder;
        this.scimitopFinder = scimitopFinder;
        this.jadinkoFinder = jadinkoFinder;
        this.varanusaurFinder = varanusaurFinder;
        this.salamanderFinder = salamanderFinder;
        this.frogFinder = frogFinder;
        this.malletopsFinder = malletopsFinder;
        this.oculiFinder = oculiFinder;
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

        if (this.varanusaurFinder.isVaranusaur(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.varanusaur, message)});
        }

        if (this.salamanderFinder.isSalamander(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.salamander, message)});
        }

        if (this.frogFinder.isFrog(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.frog, message)});
        }

        if (this.malletopsFinder.isMalletop(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.malletops, message)});
        }

        if (this.oculiFinder.isOculi(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.oculi, message)});
        }

        return Promise.reject();
    }
}