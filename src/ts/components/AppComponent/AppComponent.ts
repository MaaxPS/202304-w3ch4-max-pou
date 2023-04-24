import { Component } from "../Component/Component.js";

export class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "app container");

    this.render();
  }

  render(): void {
    this.element.innerHTML = `
    <header class="main-header">
      <img width="100" src="../images/pikachu.png" alt="Cuatro pokemons" />
      <img src="../images/pokemon-logo.svg" alt="Pokemon logo"/>
      <img width="140" src="../images/dragonite.png" alt="Snorlax durmiendo" />
    </header>
    <hr />
    <main class="main-view">
      <section class="move-pokemons">
        <button class="previous pokemons"><</button>
        <nav class="main-nav">
        <a class="pokedex link" href="index.html">Pokedex</a>
        <span class="guion">-</span>
        <a class="pokemon team" href="team.html">Pokemon Team</a>
        </nav>
        <button class="next pokemons">></button>
      </section>
      <section class="view-pokemons">
      </section>
    </main>
    `;
  }
}
