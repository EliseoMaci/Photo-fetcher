const photoContainer = document.getElementById("photoContainer");
const toggleSwitch = document.getElementById("toggleSwitch");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function fetchPhotos() {
    photoContainer.innerHTML = "";
    for (let i = 0; i < 4; i++) {
        fetch("https://picsum.photos/375/375")
            .then((response) => {
                if (response.ok) {
                    return response.url;
                } else {
                    throw new Error("Failed to fetch photo");
                }
            })
            .then((photoUrl) => {
                const img = document.createElement("img");
                img.src = photoUrl;
                img.alt = "Random Photo";

                photoContainer.appendChild(img);
            })
            .catch((error) => console.error(error));
    }
}

function applyGreyscale() {
    const images = photoContainer.querySelectorAll("img");
    images.forEach((img) => {
        if (toggleSwitch.checked) {
            img.classList.add("greyscale");
        } else {
            img.classList.remove("greyscale");
        }
    });
}

fetchPhotos();
toggleSwitch.addEventListener("change", function () {
    applyGreyscale();
});
loadMoreBtn.addEventListener("click", fetchPhotos);
