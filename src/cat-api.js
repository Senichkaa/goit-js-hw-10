import axios from 'axios';

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_CgmczNLK8iwShcfL3oyQ1ID4LEH5QcViP3aNrv33J8Uy9lFMWNs7jF2TCH6XE36l';

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => {
    if (response.status !== 200) {
      console.log('There is an error while fetching a breed');
      throw new Error(response.statusText);
    }
    return response.data;
  });
}

export function fetchCatByBreed(breedId) {
  const breedUrl = `${BASE_URL}/images/search?breed_ids=${breedId}`;
  return axios.get(breedUrl).then(response => {
    if (response.status !== 200) {
      console.log('There is an error while fetching a cat');
      throw new Error(response.statusText);
    }
    return response.data;
  });
}
