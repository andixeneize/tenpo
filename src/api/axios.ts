import axios from 'axios';
import type { InternalAxiosRequestConfig, AxiosError } from 'axios';

import { getToken } from '@/utils/auth';

const api = axios.create({
  baseURL: 'https://api.example.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor de request
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers.set('Authorization', `Bearer ${token}`);
    }
    return config;
  },
  (error: AxiosError) => {
    console.error('[Request Error]', error);
    return Promise.reject(error);
  }
);

// Interceptor de response
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.response) {
      // Error del servidor con respuesta
      console.error(
        `[Response Error] ${error.response.status}: ${error.response.statusText}`
      );

      if (error.response.status === 401) {
        console.warn('Unauthorized');
      }
    } else if (error.request) {
      // No se recibió respuesta del servidor
      console.error('[No Response]', error.message);
    } else {
      // Algo falló al configurar la request
      console.error('[Config Error]', error.message);
    }

    return Promise.reject(error);
  }
);

export default api;
