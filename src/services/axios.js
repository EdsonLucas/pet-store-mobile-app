import axios from 'axios';
import { getToken, logout } from './auth';

const api = axios.create({
  baseURL: 'http://localhost:3333/api/',
  // baseURL: 'https://api-pet-shop.herokuapp.com/api/',
});

api.interceptors.request.use(async (config) => {
  const token = getToken();
  const headers = { ...config.headers };

  if (token) headers.Authorization = `Bearer ${token}`;
  config.validateStatus = (status) => {
    if (status === 401) {
      logout();
    } else {
      return status;
    }
  };

  return config;
});

export default api;
