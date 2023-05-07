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
    console.log(trimmedValue);
  }, DEBOUNCE_DELAY)
);
