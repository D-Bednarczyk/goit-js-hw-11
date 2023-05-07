import Notiflix from 'notiflix';
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36133466-dbc0c7a3178523b048b6e9d9a';

export const fetchImgs = name => {
  return fetch(`${API_URL}/?key=${API_KEY}&q${name}&image_type=photo`)
    .then(res => {
      if (!res.ok) {
        Notiflix.Notify.failure('Oops, there is no country with that name');
        throw new Error(res.status);
      }
      return res.json();
    })
    .catch(error => {
      console.error(error);
    });
};
