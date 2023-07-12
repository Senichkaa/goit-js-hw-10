import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_CgmczNLK8iwShcfL3oyQ1ID4LEH5QcViP3aNrv33J8Uy9lFMWNs7jF2TCH6XE36l';

const BASE_URL = 'https://api.thecatapi.com/v1';

export function fetchBreeds() {
  return axios.get(`${BASE_URL}/breeds`).then(response => {
    if (!response.ok) {
      console.log('There is an error while fetching a breed');
      throw new Error(response.statusText);
    }
    return response.json();
  });
}

export function fetchCatsByBreed(breedId) {
  const breedUrl = `${BASE_URL}/images/search?breed_ids=${breedId}`;
  return axios.get(breedUrl).then(response => {
    if (!response.ok) {
      console.log('There is an error while fetching a cat');
      throw new Error(response.statusText);
    }
    return response.json();
  });
}
