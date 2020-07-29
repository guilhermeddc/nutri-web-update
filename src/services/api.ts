import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api-manager.inf.br/v1/nutri',
});

export default api;
