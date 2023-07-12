import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import './styles.css';
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

let arrayOfCats = {};
hideLoader();
hideError();

breedSelect.addEventListener('change', onSelect);

function onSelect(event) {
  showLoader();
  fetchCatByBreed(event.target.value)
    .then(data => {
      let dataInformation = data[0].breeds[0];
      let { name, description, temperament } = dataInformation;
      console.log(dataInformation);

      hideLoader();
      catInfo.innerHTML = `
       <div class="div-cat-wrap">
       <img class="cat-img" src="${data[0].url}" alt="${name}">
       <div class="cat-info-div">
         <h2 class="cat-title">${name}</h2>
         <p class="cat-description">${description}</p>
         <p class="cat-temperament"><span class="cat-temperament-span">Temperament:</span> ${temperament}</p>
       </div>
       </div>`;
    })
    .catch(error => {
      showError();
      console.log(error);
    });
}

function changeValue(values) {
  let markup = [];
  values.map(element => {
    markup.push(`<option value="${element.id}">${element.name}</option>`);
  });
  breedSelect.innerHTML = markup.join(' ');
}

fetchBreeds()
  .then(data => {
    arrayOfCats = data;
    console.log(arrayOfCats);
    changeValue(arrayOfCats);
  })
  .catch(error => {
    showError();
    console.log(error);
  });

function showLoader() {
  loader.style.display = 'block';
}

function showError() {
  error.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
function hideError() {
  error.style.display = 'none';
}
