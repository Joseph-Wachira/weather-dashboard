import { useMemo } from 'react';
import { getWeatherBackground } from '../utils/weatherHelpers';
import '../styles/background.css';

export default function Background({ weatherId, icon, children }) {
  const bgClass = useMemo(() => {
    if (!weatherId) return 'bg-clear';
    return `bg-${getWeatherBackground(weatherId, icon)}`;
  }, [weatherId, icon]);

  return (
    <div className={`fixed inset-0 transition-all duration-1000 ${bgClass} z-0`}>
      {children}
    </div>
  );
}