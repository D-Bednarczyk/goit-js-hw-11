import Notiflix from 'notiflix';
const axios = require('axios').default;
const API_URL = 'https://pixabay.com/api/';
const API_KEY = '36133466-dbc0c7a3178523b048b6e9d9a';

export const fetchImgs = async name => {
  try {
    const response = await axios.get(
      `${API_URL}?key=${API_KEY}&q=${name}&image_type=photo`
    );
    if (response.data.total === 0)
      Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    console.log(response);
    console.log(`${API_URL}/?key=${API_KEY}&q${name}&image_type=photo`);
    console.log(response.data.total);
  } catch (error) {
    console.error('Error:' + error);
  }
};
