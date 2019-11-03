import axios from 'axios';

const api = axios.create({
  baseURL: 'http://frontendtest.aurum.com.br:3000',
});

export default api;
