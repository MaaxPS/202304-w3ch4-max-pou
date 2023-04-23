import { Component } from "../Component/Component.js";
import { PokemonCardComponent } from "../PokemonCardComponent/PokemonCardComponent.js";

export class PokemonsListComponent extends Component {
  constructor(parentElement: Element, public actualPokemons: number) {
    super(parentElement, "ul", "pokemons list");

    this.render();
  }

  render(): void {
    for (let index = 0; index < 10; index++) {
      new PokemonCardComponent(this.element, index + this.actualPokemons);
    }
  }
}
