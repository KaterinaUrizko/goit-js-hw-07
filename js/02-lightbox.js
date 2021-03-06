import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imageContainer = document.querySelector('.gallery')
 
const galleryMarkup = createGalleryMarkup(galleryItems);

function createGalleryMarkup(images) {
    
    return images.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
        <a class="gallery__link" href=${original} onclick="return false">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`;

    }).join('');
}
imageContainer.insertAdjacentHTML('beforeend', galleryMarkup);
imageContainer.addEventListener('click', OnImageContainerClick);

function OnImageContainerClick(e) {
    const isGalleryImage = e.target.classList.contains('gallery__image');
    if (!isGalleryImage) {
        return;
    } else
    {
            const lightbox = new SimpleLightbox('.gallery a', { captionsData: "alt", captionDelay: 250 });
    }
}
