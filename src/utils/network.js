import axios from 'axios';

import session from './session';

const netowrk = axios.create({
  baseURL: 'http://127.0.0.1:3030/v1',
  //   baseURL: 'http://103.49.239.40:3030/v1',
});

netowrk.interceptors.request.use(
  (config) => {
    const token = session.getSession();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

netowrk.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response && error.response.status === 401) {
      console.log('Token are not valid, session has been removed');
      session.clearSession();
    }

    console.log('network error: ', error);

    return Promise.reject(error);
  },
);

export default netowrk;
