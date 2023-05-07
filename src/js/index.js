import { fetchImgs } from './fetchImgs';

import Notiflix from 'notiflix';
var _ = require('lodash');
const axios = require('axios').default;

const DEBOUNCE_DELAY = 300;

const searchEl = document.querySelector('#search-form');

//console.log(searchEl);
searchEl.addEventListener(
  'input',
  _.debounce(ev => {
    const trimmedValue = ev.target.value.trim();
    if (trimmedValue !== '') {
      fetchImgs(trimmedValue).then(returnedArray => {
        if (returnedArray.length > 10) {
          Notiflix.Notify.info(
            'Too many matches found. Please enter a more specific name.'
          );
        } else if (returnedArray.length === 0) {
          Notiflix.Notify.failure('Oops, there is no country with that name');
        }
      });
    }
  }, DEBOUNCE_DELAY)
);
