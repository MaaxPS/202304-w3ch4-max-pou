import { ComponentStructure } from "../../types";

export abstract class Component implements ComponentStructure {
  element: Element;

  constructor(parentElement: Element, tagName = "div", className = "") {
    this.element = document.createElement(tagName);
    this.element.className = className;

    parentElement.appendChild(this.element);
  }

  abstract render(): void;
}
