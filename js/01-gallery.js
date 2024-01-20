import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const createGalleryItems = galleryItems
  .map(({ original, preview, description }) => 
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" />
      </a>
    </li>`
  ).join("");

galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems);

galleryContainer.addEventListener('click', (event) => {
  event.preventDefault();
  if (event.target.nodeName === 'IMG') {
    const imageUrl = event.target.dataset.src;
    const lightboxInstance = basicLightbox.create(`
      <img src="${imageUrl}" alt="${event.target.alt}" />
    `);

    lightboxInstance.show();
  }
});