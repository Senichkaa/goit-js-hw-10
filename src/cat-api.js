import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_CgmczNLK8iwShcfL3oyQ1ID4LEH5QcViP3aNrv33J8Uy9lFMWNs7jF2TCH6XE36l';

const BASE_URL = 'https://api.thecatapi.com/v1';
const ENDPOINT = '/breeds';

export function fetchBreeds() {
  return fetch(`${BASE_URL}${ENDPOINT}`);
}
