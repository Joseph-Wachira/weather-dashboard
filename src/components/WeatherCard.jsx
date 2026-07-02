import { motion } from 'framer-motion';
import { formatDate } from '../utils/weatherHelpers';

export default function WeatherCard({ data }) {
  if (!data) return null;

  const {
    name,
    sys: { country, sunrise, sunset },
    main: { temp, feels_like, humidity, pressure },
    weather,
    wind: { speed },
    timezone,
    dt,
  } = data;

  const { description, icon } = weather[0];
  const localTime = formatDate(dt, timezone);
  const sunriseTime = formatDate(sunrise, timezone).split(', ')[1];
  const sunsetTime = formatDate(sunset, timezone).split(', ')[1];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/20 backdrop-blur-lg rounded-3xl p-6 max-w-md w-full mx-auto text-white shadow-2xl"
    >
      <div className="text-center mb-4">
        <h2 className="text-3xl font-bold">
          {name}, {country}
        </h2>
        <p className="text-sm opacity-90">{localTime}</p>
      </div>
      <div className="flex items-center justify-center gap-4 mb-6">
        <img
          src={`https://openweathermap.org/img/wn/${icon}@4x.png`}
          alt={description}
          className="w-24 h-24 drop-shadow-lg"
        />
        <div>
          <p className="text-6xl font-extrabold">{Math.round(temp)}°C</p>
          <p className="text-lg capitalize opacity-90">{description}</p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 text-center">
        <p>Feels like {Math.round(feels_like)}°C</p>
        <p>{humidity}% Humidity</p>
        <p>{Math.round(speed * 3.6)} km/h Wind</p>
        <p>{pressure} hPa</p>
      </div>
      <div className="flex justify-around mt-6 text-sm opacity-90">
        <p>🌅 {sunriseTime}</p>
        <p>🌇 {sunsetTime}</p>
      </div>
    </motion.div>
  );
}