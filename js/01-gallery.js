import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');
const gallarySetMarkup = createGalleryBox(galleryItems);


function createGalleryBox(image) {
  return image
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        /></a>
        </div>`;
    })
    .join("");
}

gallery.insertAdjacentHTML("beforeend", gallarySetMarkup);
gallery.addEventListener("click", onImgClick);

function onImgClick(evt) {
  evt.preventDefault();

  const bigimg = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${bigimg}">`);
  console.log(bigimg);

  instance.show();

}

console.log(galleryItems);





