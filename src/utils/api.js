import axios from 'axios';

const baseURL = 'http://localhost:8000/api'; // Replace this with your actual API URL

const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Define functions to make specific API requests
export const login = async (credentials) => {
  try {
    const response = await axiosInstance.post('/login', {...credentials});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const register = async (data) => {
  try {
    const response = await axiosInstance.post('/register', {...data});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const getPrice = async (data) => {
  try {
    const response = await axiosInstance.post('/rides', {...data});
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

// Add more functions for other API endpoints as needed

export default axiosInstance