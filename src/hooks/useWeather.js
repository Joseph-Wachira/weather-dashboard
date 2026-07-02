import { useState, useEffect } from 'react';
import { getCurrentWeather, getForecast } from '../services/weatherApi';
import { groupForecastByDay } from '../utils/weatherHelpers';

export const useWeather = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!city) return;

    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      try {
        const [weather, forecast] = await Promise.all([
          getCurrentWeather(city),
          getForecast(city),
        ]);
        setWeatherData(weather);
        const daily = groupForecastByDay(forecast.list);
        setForecastData(daily);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
        setForecastData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  return { weatherData, forecastData, loading, error };
};