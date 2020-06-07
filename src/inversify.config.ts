import "reflect-metadata";
import {Container} from "inversify";
import {TYPES} from "./types";
import {Bot} from "./bot";
import {Client} from "discord.js";
import {MessageResponder} from "./services/messageResponder";
import {PavosaurusFinder, BrutishFinder} from "./services"

let container = new Container();

container.bind<Bot>(TYPES.Bot).to(Bot).inSingletonScope();
container.bind<Client>(TYPES.Client).toConstantValue(new Client());
container.bind<string>(TYPES.Token).toConstantValue(process.env.TOKEN);
container.bind<MessageResponder>(TYPES.MessageResponder).to(MessageResponder).inSingletonScope();
container.bind<PavosaurusFinder>(TYPES.PavosaurusFinder).to(PavosaurusFinder).inSingletonScope();
container.bind<BrutishFinder>(TYPES.BrutishFinder).to(BrutishFinder).inSingletonScope();

export default container;