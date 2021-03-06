import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {Client} from "discord.js";
import {MessageResponder, BreedingFinder, RegularFinder, AllFinder, MeFinder} from "./commands";
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
    CorbiculaFinder,
} from "./commands/dinosaurs";

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<PavosaurusFinder>(TYPES.PavosaurusFinder).to(PavosaurusFinder).inSingletonScope();
container.bind<BrutishFinder>(TYPES.BrutishFinder).to(BrutishFinder).inSingletonScope();
container.bind<ArcaneFinder>(TYPES.ArcaneFinder).to(ArcaneFinder).inSingletonScope();
container.bind<ScimitopFinder>(TYPES.ScimitopFinder).to(ScimitopFinder).inSingletonScope();
container.bind<JadinkoFinder>(TYPES.JadinkoFinder).to(JadinkoFinder).inSingletonScope();
container.bind<VaranusaurFinder>(TYPES.VaranusaurFinder).to(VaranusaurFinder).inSingletonScope();
container.bind<SalamanderFinder>(TYPES.SalamanderFinder).to(SalamanderFinder).inSingletonScope();
container.bind<FrogFinder>(TYPES.FrogFinder).to(FrogFinder).inSingletonScope();
container.bind<MalletopsFinder>(TYPES.MalletopsFinder).to(MalletopsFinder).inSingletonScope();
container.bind<OculiFinder>(TYPES.OculiFinder).to(OculiFinder).inSingletonScope();
container.bind<SpicatiFinder>(TYPES.SpicatiFinder).to(SpicatiFinder).inSingletonScope();
container.bind<AsciatopsFinder>(TYPES.AsciatopsFinder).to(AsciatopsFinder).inSingletonScope();
container.bind<BagradaFinder>(TYPES.BagradaFinder).to(BagradaFinder).inSingletonScope();
container.bind<CorbiculaFinder>(TYPES.CorbiculaFinder).to(CorbiculaFinder).inSingletonScope();
container.bind<BreedingFinder>(TYPES.BreedingFinder).to(BreedingFinder).inSingletonScope();
container.bind<RegularFinder>(TYPES.RegularFinder).to(RegularFinder).inSingletonScope();
container.bind<AllFinder>(TYPES.AllFinder).to(AllFinder).inSingletonScope();
container.bind<MeFinder>(TYPES.MeFinder).to(MeFinder).inSingletonScope();

export default container;