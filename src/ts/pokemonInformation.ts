import { InformationComponent } from "./components/InformationComponent/InformationComponent.js";
import { getPokemonInformation } from "./functions/getPokemonInformation/getPokemonInformation.js";

const body = document.querySelector("body")!;
new InformationComponent(body);

getPokemonInformation();
