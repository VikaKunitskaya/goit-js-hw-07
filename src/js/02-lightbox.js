import { galleryItems } from "./gallery-items.js";

// Change code below this line

const galleryEl = document.querySelector(".gallery");
// const largeImg = event.target.dataset.source;


const makeImagesMarkup = ({ preview, description, original }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href=${original}>
     <img class="gallery__image" src=${preview} alt=${description} />
  </a>
</li>`;
};

const makeImages = galleryItems.map((item) => makeImagesMarkup(item)).join("");

galleryEl.insertAdjacentHTML("afterbegin", makeImages);


// =============== lightbox start ====================
const lightboxConfig = {
  captionsData: 'alt', 
  captionDelay: 250,
  animationSpeed: 500,
  overlayOpacity: 0.9,
  scrollZoom: false,

}

const lightbox = new SimpleLightbox(".gallery a", lightboxConfig);

lightbox.on();


