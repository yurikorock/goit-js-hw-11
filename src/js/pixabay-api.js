import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const myApiKey = '49133693-4042ac5cb8c0a8ba13ba0f36c';
const baseURL = 'https://pixabay.com/api/';

function getImages() {
  axios.get(baseURL, {
    params: {
      key: myApiKey,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
}
