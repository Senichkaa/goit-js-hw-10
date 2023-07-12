import { fetchBreeds, fetchCatByBreed } from './cat-api.js';

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
      let { url, name, description, temperament } = dataInformation;
      console.log(dataInformation);
      catInfo.innerHTML = `
       <img class="cat-info__cat-img" src="${url}" alt="cat ${name}" width="460px">
       <div class="cat-info__text-box">
         <h2 class="cat-info__tittle">${name}</h2>
         <p class="cat-info__description">${description}</p>
         <p class="cat-info__temperament"><span class="temperament__header">Temperament:</span> ${temperament}</p>
       </div>`;
    })
    .catch(error => {
      showError();
      console.log(error);
      hideLoader();
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
