import { fetchImgs } from './fetchImgs';
import { makeImgCard } from './makeImgCard';
import Notiflix from 'notiflix';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const ElForm = document.querySelector('#search-form');
const ElGallery = document.querySelector('.gallery');
const ElLoadMore = document.querySelector('.load-more');

ElForm.addEventListener('input', handleInput);
ElForm.addEventListener('submit', handleSubmit);
ElLoadMore.addEventListener('click', handleLoadMore);

let page = 2;

function handleInput(event) {
  const {
    elements: { searchQuery },
  } = event.currentTarget;
}

let lightboxGallery = new SimpleLightbox('.gallery a', {});

function handleSubmit(event) {
  event.preventDefault();
  ElGallery.innerHTML = '';
  const trimmedValue = ElForm.elements.searchQuery.value.trim();
  if (trimmedValue !== '')
    fetchImgs(trimmedValue, 1).then(res => {
      console.log(res);
      res.data.hits.forEach(el => ElGallery.append(makeImgCard(el)));
      ElLoadMore.classList.remove('hidden');
      lightboxGallery.refresh();
      Notiflix.Notify.info(`Hooray! We found ${res.data.totalHits} images.`);
      //"Hooray! We found ${totalHits} images."
    });
}

function handleLoadMore(event) {
  event.preventDefault();
  const trimmedValue = ElForm.elements.searchQuery.value.trim();
  if (trimmedValue !== '')
    fetchImgs(trimmedValue, page).then(res => {
      res.data.hits.forEach(el => ElGallery.append(makeImgCard(el)));
      lightboxGallery.refresh();
    });

  page++;
}
