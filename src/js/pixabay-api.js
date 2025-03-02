import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '49133693-4042ac5cb8c0a8ba13ba0f36c';
const BASE_URL = 'https://pixabay.com/api/';

export function getImages() {
  // axios.get(baseURL, {
  //   params: {
  //     key: myApiKey,
  //     q: query,
  //     image_type: 'photo',
  //     orientation: 'horizontal',
  //     safesearch: true,
  //   },
  // });

  return fetch(`${BASE_URL}?client_id=${API_KEY}`)
    .then(resp => {
      console.log(resp);
    })
    .catch(error => {
      console.log(error);
    });
}
