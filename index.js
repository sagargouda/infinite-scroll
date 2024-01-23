const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready = false;
let imagesLoaded = 0;
let totalImages = 0;
let photosArray = [];

/// unsplash api
const count = 30;
const apiKey = "BmJxAzmwUkXMEKyV3Aw0PbyjK6t6inqL-3v9jYlgz_U";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

function loadImg() {
  imagesLoaded++;
  if (imagesLoaded === totalImages) {
    ready = true;

    loader.hidden = true;
  }
}

// displaying photos
function displayPhotos() {
  imagesLoaded = 0;
  totalImages = photosArray.length;
  // running for eech object in array
  photosArray.forEach((photo) => {
    // creating a tag link to unsplash

    const item = document.createElement("a");
    item.setAttribute("href", photo.links.html);
    item.setAttribute("target", "_blank");

    const img = document.createElement("img");
    img.setAttribute("src", photo.urls.regular);
    img.setAttribute("alt", photo.alt_description);
    img.setAttribute("title", photo.alt_description);

    img.addEventListener("load", loadImg);

    item.appendChild(img);
    imageContainer.appendChild(item);
  });
}

// get photos from unsplash

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
}

// scroll
window.addEventListener("scroll", () => {
  if (
    window.innerHeight + window.scrollY >= document.body.offsetHeight - 500 &&
    ready
  ) {
    ready = false;

    getPhotos();
  }
});

// on load
getPhotos();
