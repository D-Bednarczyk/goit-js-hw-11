import { fetchImgs } from './fetchImgs';

import Notiflix from 'notiflix';
var _ = require('lodash');
const axios = require('axios').default;

const DEBOUNCE_DELAY = 300;

const ElForm = document.querySelector('#search-form');

ElForm.addEventListener('input', handleInput);
ElForm.addEventListener('submit', handleSubmit);

function handleInput(event) {
  const {
    elements: { searchQuery },
  } = event.currentTarget;
}

function handleSubmit(event) {
  event.preventDefault();
  const trimmedValue = ElForm.elements.searchQuery.value.trim();
  console.log(trimmedValue);
  if (trimmedValue !== '')
    fetchImgs(trimmedValue).then(returnedArray => console.log(returnedArray));
}

//console.log(searchEl);

/* searchEl.addEventListener(
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
); */
