import { fetchBreeds, fetchCatByBreed } from './cat-api.js';
import './styles.css';
const breedSelect = document.querySelector('.breed-select');
const catInfo = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');
const error = document.querySelector('.error');

let arrayOfCats = {};
hideSelect();
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
      hideError();
      showCatInfo();
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
      showSelect();
      hideLoader();
      hideCatInfo();
      console.log(error);
    });
}

function changeValue(values) {
  let markup = [];
  values.map(element => {
    markup.push(
      `<option value="" disabled selected hidden>Select your cat</option><option value="${element.id}">${element.name}</option>`
    );
  });
  breedSelect.innerHTML = markup.join(' ');
}

fetchBreeds()
  .then(data => {
    hideLoader();
    showSelect();
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

function showSelect() {
  breedSelect.style.display = 'block';
}

function showCatInfo() {
  catInfo.style.display = 'block';
}

function hideLoader() {
  loader.style.display = 'none';
}
function hideError() {
  error.style.display = 'none';
}

function hideSelect() {
  breedSelect.style.display = 'none';
}

function hideCatInfo() {
  catInfo.style.display = 'none';
}
