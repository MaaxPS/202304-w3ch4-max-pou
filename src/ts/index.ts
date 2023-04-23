import { AppComponent } from "./components/AppComponent/AppComponent.js";
import { PokemonCardComponent } from "./components/PokemonCardComponent/PokemonCardComponent.js";
import { PokemonsListComponent } from "./components/PokemonsListComponent/PokemonsListComponent.js";
import { buttonsFunctionality } from "./functions/buttonsFunctionality/buttonsFunctionality.js";

const body = document.querySelector("body")!;

new AppComponent(body);

const viewPokemons = document.querySelector(".view-pokemons")!;
let actualPokemons = 1;

buttonsFunctionality(actualPokemons);

new PokemonsListComponent(viewPokemons, actualPokemons);
