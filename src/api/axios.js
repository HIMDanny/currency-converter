import axios from 'axios';

const config = {
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_API_HOST,
  },
};

export default axios.create(config);
