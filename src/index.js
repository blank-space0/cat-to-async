import "./styles.css"; 

document.addEventListener("DOMContentLoaded", () => {
  const img = document.querySelector("img");
  const button = document.querySelector(".new-img");
  const API_KEY = process.env.GIPHY_KEY; 

  async function getCats() {
    const response = await fetch(
      `https://api.giphy.com/v1/gifs/translate?api_key=${API_KEY}&s=cats`,
      { mode: "cors" }
    );
    const catData = await response.json();
    img.src = catData.data.images.original.url;
  }

  getCats();
  button.onclick = getCats;
});
