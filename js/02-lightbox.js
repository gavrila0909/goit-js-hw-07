import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from "simplelightbox";

const galleryContainer = document.querySelector(".gallery");
const createGalleryItems = galleryItems 
    .map(({original, preview, description}) => 
    `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-src="${original}" alt="${description}" />
    </a>
    </li>`
    ).join("");
galleryContainer.insertAdjacentHTML('beforeend', createGalleryItems );
const galleryHandler = new SimpleLightbox(".gallery a");
galleryHandler.on("show.simpleLightbox");

new SimpleLightbox('ul.gallery a', { captionsData: 'alt', captionDelay: 250 });