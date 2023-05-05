export {services};

//Consultas HTTP
const axios = require('axios/dist/browser/axios.cjs');

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '33886860-f2c6c3112fe87154f43438e97';

const services = {
  getImages: async function(searchTerm, page,RESULTS_PER_PAGE){
    try {
      const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${searchTerm}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${RESULTS_PER_PAGE}`);
      const images = response;
      return images;
    } catch (error) {
      console.error(error);
    }
  }
}
