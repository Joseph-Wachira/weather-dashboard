import { motion } from 'framer-motion';
import { formatDate } from '../utils/weatherHelpers';

export default function Forecast({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
      className="mt-6 w-full max-w-2xl mx-auto"
    >
      <h3 className="text-white text-xl font-bold mb-3 text-center">
        5-Day Forecast
      </h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
        {data.map((day, index) => (
          <div
            key={day.date}
            className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-white text-center"
          >
            <p className="text-sm font-medium">
              {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
            </p>
            <p className="text-xs opacity-80">{day.date.slice(5)}</p>
            <img
              src={`https://openweathermap.org/img/wn/${day.weather.icon}@2x.png`}
              alt={day.weather.description}
              className="w-10 h-10 mx-auto"
            />
            <p className="text-xs capitalize">{day.weather.description}</p>
            <p className="text-sm font-semibold">
              {Math.round(day.temp_max)}° / {Math.round(day.temp_min)}°
            </p>
          </div>
        ))}
      </div>
    </motion.div>
  );
}