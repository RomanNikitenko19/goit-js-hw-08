// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ref = {
  divGallery: document.querySelector('.gallery'),
};

const markupGallery = galleryItems
  .map(galleryItem => {
    return `  <a class="gallery__link" href="${galleryItem.original}">
                <img class="gallery__image"src="${galleryItem.preview}"
                  alt="${galleryItem.description}"
                  />
              </a>`;
  })
  .join('');

ref.divGallery.innerHTML = markupGallery;

var lightbox = new SimpleLightbox('.gallery a', {
  /* options */ captionsData: 'alt',
  animationSpeed: 400,
  throttleInterval: 200,
});
