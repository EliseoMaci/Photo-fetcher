const photoContainer = document.getElementById("photoContainer");
const toggleSwitch = document.getElementById("toggleSwitch");
const loadMoreBtn = document.getElementById("loadMoreBtn");

async function fetchPhotos() {
    console.log("Fetching photos...");
    photoContainer.innerHTML = "";
    try {
        for (let i = 0; i < 4; i++) {
            const response = await fetch("https://picsum.photos/375/375");
            if (!response.ok) {
                throw new Error("Failed to fetch photo");
            }

            const photoUrl = response.url;
            const img = document.createElement("img");
            img.src = photoUrl;
            img.alt = "Random Photo";

            photoContainer.appendChild(img);
        }
        console.log("Photos fetched.");
    } catch (error) {
        console.error(error);
    }
}

function applyGreyscale() {
    console.log("Applying greyscale...");
    const images = photoContainer.querySelectorAll("img");
    images.forEach((img) => {
        if (toggleSwitch.checked) {
            img.classList.add("greyscale");
        } else {
            img.classList.remove("greyscale");
        }
    });
    console.log("Greyscale applied.");
}

fetchPhotos();
toggleSwitch.addEventListener("change", function () {
    console.log("Toggle switch changed.");
    applyGreyscale();
});

loadMoreBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Load more button clicked.");
    fetchPhotos();
});
