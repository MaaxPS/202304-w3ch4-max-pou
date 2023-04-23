import { Pokemon } from "../../types.js";
import { Component } from "../Component/Component.js";

export class PokemonCardComponent extends Component {
  pokemon: Pokemon;

  constructor(parentElement: Element, public indexPokemon: number) {
    super(parentElement, "li", "pokemon card");

    (async () => {
      await this.getPokemon(indexPokemon);
      console.log(this.pokemon);
      this.render();
    })();
  }

  async getPokemon(indexPokemon: number): Promise<void> {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${indexPokemon}`
    );
    this.pokemon = (await response.json()) as Pokemon;
  }

  render(): void {
    this.element.innerHTML = `
    <img class="pokemon image" src="${this.pokemon.sprites.versions["generation-iv"]["heartgold-soulsilver"].front_default}" alt="${this.pokemon.name} sprite" />
    <h3 class="pokemon name">${this.pokemon.name}</h3>
    `;
  }
}
