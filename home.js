document.addEventListener("DOMContentLoaded", () => {
    const img = document.querySelector("img");
    const button = document.querySelector(".new-img");
    
    async function getCats() {
        const response = await fetch("https://api.giphy.com/v1/gifs/translate?api_key=REDACTED&s=cats", { mode: "cors" });
        const catData = await response.json(); // json returns a promise, so its async, meaning we have to await
        img.src = catData.data.images.original.url;
    }

    getCats();

    button.onclick = getCats;
})