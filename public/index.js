const buttonGo = document.querySelector(".btn");
const searchBar = document.querySelector(".search");
const imageCharacter = document.querySelector(".image");
const errorParagraph = document.querySelector(".text-danger");
const getImage = async () => {
    try {
        errorParagraph.classList.add("error");
        const response = await fetch(`https://rickandmortyapi.com/api/character/${searchBar.value}`);
        if (!response.ok) {
            throw new Error("character not found");
        }
        const character = await response.json();
        if (character.image) {
            imageCharacter.src = `${character.image}`;
        }
    }
    catch (error) {
        imageCharacter.src = "";
        errorParagraph.classList.remove("error");
    }
};
buttonGo?.addEventListener("click", (event) => {
    event.preventDefault();
    getImage();
});
//# sourceMappingURL=index.js.map