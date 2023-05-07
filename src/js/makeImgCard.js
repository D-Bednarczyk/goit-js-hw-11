export function makeImgCard(pic) {
  //const ElLi = document.createElement('li');
  //ElLi.classList.add('gallery__item');

  const ElArchor = document.createElement('a');
  //ElArchor.classList.add('gallery__link');
  ElArchor.classList.add('gallery__item');
  ElArchor.setAttribute('href', pic.largeImageURL);
  //ElLi.appendChild(ElArchor);

  const ElImagePrev = document.createElement('img');
  ElImagePrev.classList.add('gallery__image');
  ElImagePrev.setAttribute('src', pic.webformatURL);
  ElImagePrev.setAttribute('alt', pic.id);
  ElImagePrev.setAttribute('loading', 'lazy');
  ElArchor.appendChild(ElImagePrev);

  const ElImgInfoLabel = document.createElement('ul');
  ElImgInfoLabel.classList.add('gallery__iteminfo');

  /* const ElLikesL = document.createElement('li');
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
  ElImgInfoLabel.appendChild(ElDownloadsL); */

  const ElImgInfo = document.createElement('div');
  ElImgInfo.classList.add('gallery__iteminfo');

  const ElLikes = document.createElement('p');
  ElLikes.classList.add('gallery__iteminfoel');
  const ElLikesB = document.createElement('b');
  ElLikes.textContent = pic.likes;
  ElLikes.prepend(ElLikesB);
  ElLikesB.textContent = 'Likes ';

  const ElViews = document.createElement('p');
  ElViews.classList.add('gallery__iteminfoel');
  const ElViewsB = document.createElement('b');
  ElViews.textContent = pic.views;
  ElViews.prepend(ElViewsB);
  ElViewsB.textContent = 'Views ';

  const ElComments = document.createElement('p');
  ElComments.classList.add('gallery__iteminfoel');
  const ElCommentsB = document.createElement('b');
  ElComments.textContent = pic.comments;
  ElComments.prepend(ElCommentsB);
  ElCommentsB.textContent = 'Comments ';

  const ElDownloads = document.createElement('p');
  ElDownloads.classList.add('gallery__iteminfoel');
  const ElDownloadsB = document.createElement('b');
  ElDownloads.textContent = pic.downloads;
  ElDownloads.prepend(ElDownloadsB);
  ElDownloadsB.textContent = 'Downloads ';

  /* const ElViews = document.createElement('p');
  ElViews.classList.add('gallery__iteminfoel');
    ElViews.textContent = `${pic.views}`;

  const ElComments = document.createElement('p');
  ElComments.classList.add('gallery__iteminfoel');
  ElComments.textContent = `${pic.comments}`;

  const ElDownloads = document.createElement('p');
  ElDownloads.classList.add('gallery__iteminfoel');
  ElDownloads.textContent = `${pic.downloads}`; */

  ElImgInfo.appendChild(ElLikes);
  ElImgInfo.appendChild(ElViews);
  ElImgInfo.appendChild(ElComments);
  ElImgInfo.appendChild(ElDownloads);
  // ElArchor.appendChild(ElImgInfoLabel);
  ElArchor.appendChild(ElImgInfo);

  return ElArchor;
}
