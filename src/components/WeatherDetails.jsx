import { motion } from 'framer-motion';

export default function WeatherDetails({ data }) {
  if (!data) return null;

  const {
    main: { temp_min, temp_max, sea_level, grnd_level },
    visibility,
  } = data;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-white/20 backdrop-blur-md rounded-2xl p-4 max-w-md w-full mx-auto text-white mt-4"
    >
      <h3 className="text-lg font-semibold mb-2">More Details</h3>
      <div className="grid grid-cols-2 gap-2 text-sm">
        <p>Min: {Math.round(temp_min)}°C</p>
        <p>Max: {Math.round(temp_max)}°C</p>
        <p>Visibility: {visibility / 1000} km</p>
        <p>Sea Level: {sea_level ? `${sea_level} hPa` : 'N/A'}</p>
        <p>Ground Level: {grnd_level ? `${grnd_level} hPa` : 'N/A'}</p>
      </div>
    </motion.div>
  );
}