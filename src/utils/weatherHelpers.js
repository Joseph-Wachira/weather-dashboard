export const getWeatherBackground = (weatherId, icon) => {
  if (icon && icon.endsWith('n')) {
    return 'night';
  }
  if (weatherId >= 200 && weatherId < 300) {
    return 'thunderstorm';
  }
  if (weatherId >= 300 && weatherId < 400) {
    return 'drizzle';
  }
  if (weatherId >= 500 && weatherId < 600) {
    return 'rain';
  }
  if (weatherId >= 600 && weatherId < 700) {
    return 'snow';
  }
  if (weatherId >= 700 && weatherId < 800) {
    return 'mist';
  }
  if (weatherId === 800) {
    return 'clear';
  }
  if (weatherId > 800 && weatherId < 900) {
    return 'clouds';
  }
  return 'clear';
};

export const formatDate = (timestamp, timezoneOffset) => {
  const localTime = new Date((timestamp + timezoneOffset) * 1000);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };
  return localTime.toLocaleDateString('en-US', options);
};

export const groupForecastByDay = (list) => {
  const days = {};
  list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!days[date]) {
      days[date] = [];
    }
    days[date].push(item);
  });
  const dailyForecasts = Object.keys(days)
    .slice(0, 5)
    .map((date) => {
      const dayData = days[date];
      const midday = dayData[Math.floor(dayData.length / 2)];
      return {
        date: date,
        temp_min: Math.min(...dayData.map((d) => d.main.temp_min)),
        temp_max: Math.max(...dayData.map((d) => d.main.temp_max)),
        weather: midday.weather[0],
      };
    });
  return dailyForecasts;
};