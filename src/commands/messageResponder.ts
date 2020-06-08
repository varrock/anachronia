import {Message} from "discord.js";
import {inject, injectable} from "inversify";
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
    SpicatiFinder,
    AsciatopsFinder,
    BagradaFinder,
    CorbiculaFinder
} from "./dinosaurs";
import {BreedingFinder} from "./breeding";
import {RegularFinder} from "./regular";
import {TYPES} from "../types";
import {dinosaurs, generateDinosaurEmbed, generateSortedBreedingEmbed, generateSortedRegularEmbed} from "../../utils/"


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
    private spicatiFinder: SpicatiFinder;
    private asciatopsFinder: AsciatopsFinder;
    private bagradaFinder: BagradaFinder;
    private corbiculaFinder: CorbiculaFinder;
    private breedingFinder: BreedingFinder;
    private regularFinder: RegularFinder;

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
        @inject(TYPES.SpicatiFinder) spicatiFinder: SpicatiFinder,
        @inject(TYPES.AsciatopsFinder) asciatopsFinder: AsciatopsFinder,
        @inject(TYPES.BagradaFinder) bagradaFinder: BagradaFinder,
        @inject(TYPES.CorbiculaFinder) corbiculaFinder: CorbiculaFinder,
        @inject(TYPES.BreedingFinder) breedingFinder: BreedingFinder,
        @inject(TYPES.RegularFinder) regularFinder: RegularFinder

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
        this.spicatiFinder = spicatiFinder;
        this.asciatopsFinder = asciatopsFinder;
        this.bagradaFinder = bagradaFinder;
        this.corbiculaFinder = corbiculaFinder;
        this.breedingFinder = breedingFinder;
        this.regularFinder = regularFinder;
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

        if (this.spicatiFinder.isSpicati(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.spicati, message)});
        }

        if (this.asciatopsFinder.isAsciatops(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.asciatops, message)});
        }

        if (this.bagradaFinder.isBagrada(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.bagrada, message)});
        }

        if (this.corbiculaFinder.isCorbicula(message.content)) {
            return message.channel.send({embed: generateDinosaurEmbed(dinosaurs.corbicula, message)});
        }

        if (this.breedingFinder.isBreeding(message.content)) {
            return message.channel.send({embed: generateSortedBreedingEmbed(message)});
        }

        if (this.regularFinder.isRegular(message.content)) {
            return message.channel.send({embed: generateSortedRegularEmbed(message)});
        }

        return Promise.reject();
    }
}