const photoContainer = document.getElementById("photoContainer");
const toggleSwitch = document.getElementById("toggleSwitch");
const loadMoreBtn = document.getElementById("loadMoreBtn");
function fetchPhotos() {

  photoContainer.innerHTML = "";


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

        const img = document.createElement("img");
        img.src = photoUrl;
        img.alt = "Random Photo";

    
        photoContainer.appendChild(img);

      })
      .catch((error) => console.error(error));
  }
}

function applyGrayscale() {
 
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

fetchPhotos();

toggleSwitch.addEventListener("click", applyGrayscale);
loadMoreBtn.addEventListener("click", fetchPhotos);