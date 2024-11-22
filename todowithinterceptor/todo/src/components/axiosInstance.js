import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', 
});


axiosInstance.interceptors.request.use(
  (config) => {
    const token = 'my_fake_token'; 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    console.log('Request Sent:', config);
    return config;
  },
  (error) => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);


axiosInstance.interceptors.response.use(
  (response) => {
    console.log('Response Received:', response);
    return response.data; 
  },
  (error) => {
    console.error('Response Error:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default axiosInstance;
