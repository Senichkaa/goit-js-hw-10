import './styles.css';
import { fetchBreeds } from './cat-api.js';

const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

breedSelect.addEventListener('select', onSelect);

function onSelect() {}
