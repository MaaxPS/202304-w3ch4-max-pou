const buttonGo = document.querySelector(".btn");
const searchBar: HTMLInputElement = document.querySelector(".search")!;
const imageCharacter: HTMLImageElement = document.querySelector(".image")!;
const errorParagraph: HTMLParagraphElement =
  document.querySelector(".text-danger")!;

const getImage = async () => {
  try {
    errorParagraph.classList.add("error");
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${searchBar.value}`
    );

    if (!response.ok) {
      throw new Error("character not found");
    }

    const character = await response.json();

    if (character.image) {
      imageCharacter.src = `${character.image}`;
    }
  } catch (error) {
    imageCharacter.src = "";
    errorParagraph.classList.remove("error");
  }
};

buttonGo?.addEventListener("click", (event) => {
  event.preventDefault();
  getImage();
});
