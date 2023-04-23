import { PokemonsListComponent } from "../../components/PokemonsListComponent/PokemonsListComponent.js";

export const buttonsFunctionality = (actualPokemons: number) => {
  const previousPokemons = document.querySelector(".previous.pokemons");
  const nextPokemons = document.querySelector(".next.pokemons");
  const pokemonsView = document.querySelector(".view-pokemons")!;

  nextPokemons?.addEventListener("click", () => {
    actualPokemons += 10;
    document.querySelector(".pokemons.list")?.remove();
    new PokemonsListComponent(pokemonsView, actualPokemons);
  });

  previousPokemons?.addEventListener("click", () => {
    if (actualPokemons > 10) {
      actualPokemons -= 10;
      document.querySelector(".pokemons.list")?.remove();
      new PokemonsListComponent(pokemonsView, actualPokemons);
    }
  });
};
