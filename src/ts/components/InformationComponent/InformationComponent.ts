import { Component } from "../Component/Component.js";

export class InformationComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "div", "app-information container");

    this.render();
  }

  render(): void {
    this.element.innerHTML = `
    <header class="main-header></header>
    <main class="pokemon-information"></main>
    `;
  }
}
