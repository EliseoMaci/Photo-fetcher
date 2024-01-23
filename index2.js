const photoContainer = document.getElementById("photoContainer");
const toggleSwitch = document.getElementById("toggleSwitch");
const loadMoreBtn = document.getElementById("loadMoreBtn");
function fetchPhotos() {
  // Clear the existing content of the photo container
  photoContainer.innerHTML = "";

  // Fetch 4 random photos from the API
  for (let i = 0; i < 4; i++) {
    fetch("https://picsum.photos/367/367")
      .then((response) => {
        if (response.ok) {
          return response.url;
        } else {
          throw new Error("Failed to fetch photo");
        }
      })
      .then((photoUrl) => {
        // Create an image element
        const img = document.createElement("img");
        img.src = photoUrl;
        img.alt = "Random Photo";

        // Append the image to the container
        photoContainer.appendChild(img);

        // const photoInfo = document.createElement("p");
        // photoInfo.textContent = `Author: ${info.author}`;
        // photoContainer.appendChild(photoInfo);
      })
      .catch((error) => console.error(error));
  }
}

function applyGrayscale() {
  // Apply grayscale class to all images if the toggle switch is enabled
  const images = photoContainer.querySelectorAll("img");
  images.forEach((img) => {
    if (toggleSwitch.checked) {
      img.classList.add("greyscale");
    } else {
      img.classList.remove("greyscale");
    }
  });
}

function loadMore() {}

// Initial load of photos
fetchPhotos();

// Apply grayscale effect when the switch is changed
toggleSwitch.addEventListener("click", applyGrayscale);
loadMoreBtn.addEventListener("click", fetchPhotos);