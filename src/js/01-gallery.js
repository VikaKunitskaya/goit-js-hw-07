import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");

// const imagesMarkup = galleryItems
//   .map(({ preview, description, original }) => {
//     ///  V1
//     // const divEl = document.createElement('div');
//     // divEl.classList.add("gallery__item")
//     // const linkEl = document.createElement('a');
//     // linkEl.classList.add("gallery__link");
//     // linkEl.href = element.original;
//     // divEl.appendChild(linkEl);
//     // const imageEl = document.createElement('img');
//     // // imageEl.setAttribute('src', element.preview);
//     // imageEl.classList.add("gallery__image");
//     // imageEl.src = element.preview;
//     // imageEl.alt = element.description;
//     // imageEl.setAttribute('data-source', element.original)
//     // linkEl.appendChild(imageEl);

// //// V2
//     const element = `
//     <div class="gallery__item">
//     <a class="gallery__link" href=${original}>
//       <img
//         class="gallery__image"
//         src=${preview}
//         data-source=${original}
//         alt=${description}
//       />
//     </a>
//   </div>`;

//     return element;
//   })
//   .join("");

// console.log(imagesMarkup);

const makeImagesMarkup = ({ preview, description, original }) => {
  return `<div class="gallery__item">
    <a class="gallery__link" href=${original}>
      <img
        class="gallery__image"
        src=${preview}
        data-source=${original}
        alt=${description}
      />
    </a>
  </div>`;
};

const makeImages = galleryItems.map((item) => makeImagesMarkup(item)).join("");

galleryEl.insertAdjacentHTML("afterbegin", makeImages);

galleryEl.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  window.addEventListener("keydown", onEscKeyPress);

  const largeImg = event.target.dataset.source;
  const image = event.target.classList.contains("gallery__image");

  if (!image) {
    return;
  }

  const instance = basicLightbox.create(`
  <img width="980" src="${largeImg}"/>
  `);

  instance.show();

  function onEscKeyPress(event) {
     if (event.code === 'Escape') {
     instance.close();
     window.removeEventListener("keydown", onEscKeyPress);
     }
   
  }
}
