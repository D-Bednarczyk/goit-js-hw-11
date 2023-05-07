import { fetchImgs } from './fetchImgs';

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

function handleSubmit(event) {
  event.preventDefault();
  ElGallery.innerHTML = '';
  const trimmedValue = ElForm.elements.searchQuery.value.trim();
  if (trimmedValue !== '')
    fetchImgs(trimmedValue, 1).then(res => {
      res.data.hits.forEach(el => ElGallery.append(makeImgCard(el)));
      ElLoadMore.classList.remove('hidden');
    });
}

function handleLoadMore(event) {
  event.preventDefault();
  const trimmedValue = ElForm.elements.searchQuery.value.trim();
  if (trimmedValue !== '')
    fetchImgs(trimmedValue, page).then(res => {
      res.data.hits.forEach(el => ElGallery.append(makeImgCard(el)));
    });
  page++;
}

function makeImgCard(pic) {
  const ElLi = document.createElement('li');
  ElLi.classList.add('gallery__item');

  const ElArchor = document.createElement('a');
  ElArchor.classList.add('gallery__link');
  ElArchor.setAttribute('href', pic.largeImageURL);
  ElLi.appendChild(ElArchor);

  const ElImagePrev = document.createElement('img');
  ElImagePrev.classList.add('gallery__image');
  ElImagePrev.setAttribute('src', pic.webformatURL);
  ElImagePrev.setAttribute('alt', pic.id);
  ElImagePrev.setAttribute('loading', 'lazy');
  ElArchor.appendChild(ElImagePrev);

  const ElImgInfoLabel = document.createElement('ul');
  ElImgInfoLabel.classList.add('gallery__iteminfo');

  const ElLikesL = document.createElement('li');
  ElLikesL.classList.add('gallery__iteminfoel');
  ElLikesL.textContent = `Likes`;

  const ElViewsL = document.createElement('li');
  ElViewsL.classList.add('gallery__iteminfoel');
  ElViewsL.textContent = `Views`;

  const ElCommentsL = document.createElement('li');
  ElCommentsL.classList.add('gallery__iteminfoel');
  ElCommentsL.textContent = `Comments`;

  const ElDownloadsL = document.createElement('li');
  ElDownloadsL.classList.add('gallery__iteminfoel');
  ElDownloadsL.textContent = `Downloads`;

  ElImgInfoLabel.appendChild(ElLikesL);
  ElImgInfoLabel.appendChild(ElViewsL);
  ElImgInfoLabel.appendChild(ElCommentsL);
  ElImgInfoLabel.appendChild(ElDownloadsL);

  const ElImgInfo = document.createElement('ul');
  ElImgInfo.classList.add('gallery__iteminfo');

  const ElLikes = document.createElement('li');
  ElLikes.classList.add('gallery__iteminfoel');
  ElLikes.textContent = `${pic.likes}`;

  const ElViews = document.createElement('li');
  ElViews.classList.add('gallery__iteminfoel');
  ElViews.textContent = `${pic.views}`;

  const ElComments = document.createElement('li');
  ElComments.classList.add('gallery__iteminfoel');
  ElComments.textContent = `${pic.comments}`;

  const ElDownloads = document.createElement('li');
  ElDownloads.classList.add('gallery__iteminfoel');
  ElDownloads.textContent = `${pic.downloads}`;

  ElImgInfo.appendChild(ElLikes);
  ElImgInfo.appendChild(ElViews);
  ElImgInfo.appendChild(ElComments);
  ElImgInfo.appendChild(ElDownloads);
  ElLi.appendChild(ElImgInfoLabel);
  ElLi.appendChild(ElImgInfo);

  return ElLi;
}
