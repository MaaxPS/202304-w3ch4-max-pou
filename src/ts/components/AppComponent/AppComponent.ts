import { Component } from "../Component/Component.js";

export class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "app container");

    this.render();
  }

  render(): void {
    this.element.innerHTML = `
    <header class="main-header">
      <img src="../images/pokemon-logo.svg" alt="pokemon logo"/>
    </header>
    <main class="main-view">
      <section class="move-pokemons">
        <button class="previous pokemons"><</button>
        <h3 class="em-all">Gotta Catch ’Em All</h3>
        <button class="next pokemons">></button>
      </section>
      <section class="view-pokemons">
      </section>
    </main>
    `;
  }
}
