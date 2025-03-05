import SimpleLightbox from 'simplelightbox';

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');

export function renderGallery(images) {
  gallery.innerHTML = ''; // Очищаємо галерею перед новим рендерингом

  const markup = images
    .map(image => {
      // отримали значення і робимо деструктурізацію по ключовим значенням
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = image;
      return `<a href="${largeImageURL}" class="gallery-link">
            <img src="${webformatURL}" alt="${tags}" class="gallery-image" />
            <div class="gallery-info">
	          <p><b>likes</b>: ${image.likes}</p>
	          <p><b>views</b>: ${image.views}</p>
	          <p><b>comments</b>: ${image.comments}</p>
            <p><b>downloads</b>: ${image.downloads}</p>
            </div>
	        </a>`;
    })
    .join('');
  gallery.insertAdjacentHTML('beforeend', markup);

  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
  lightbox.refresh();
}
