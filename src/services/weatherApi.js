import axios from 'axios';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeather = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error('City not found. Please check the name and try again.');
      } else if (error.response.status === 401) {
        throw new Error('Invalid API key. Please check your configuration.');
      } else if (error.response.status === 429) {
        throw new Error('Too many requests. Please try again later.');
      } else {
        throw new Error('Something went wrong. Please try again.');
      }
    } else if (error.request) {
      throw new Error('Network error. Please check your internet connection.');
    } else {
      throw new Error('An unexpected error occurred.');
    }
  }
};

export const getForecast = async (city) => {
  try {
    const response = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      if (error.response.status === 404) {
        throw new Error('City not found.');
      } else if (error.response.status === 401) {
        throw new Error('Invalid API key.');
      } else if (error.response.status === 429) {
        throw new Error('Too many requests.');
      } else {
        throw new Error('Something went wrong.');
      }
    } else if (error.request) {
      throw new Error('Network error.');
    } else {
      throw new Error('Unexpected error.');
    }
  }
};