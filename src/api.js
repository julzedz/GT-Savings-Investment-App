import axios from 'axios';

const api = axios.create({
  baseURL: 'https://mysite-w7ct.onrender.com/api/v1',
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    const modifiedConfig = { ...config }; // Create a copy of config
    if (token) {
      modifiedConfig.headers.Authorization = `Bearer ${token}`;
    }
    return modifiedConfig;
  },
  (error) => Promise.reject(error),
);

// Add response interceptor to handle 401 errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // Redirect to login page on 401 error
      window.location.href = '/login';
    }
    return Promise.reject(error);
  },
);

export default api;
