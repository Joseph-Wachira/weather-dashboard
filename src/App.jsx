import { useState } from 'react';
import SearchBar from './components/SearchBar';
import WeatherCard from './components/WeatherCard';
import WeatherDetails from './components/WeatherDetails';
import Forecast from './components/Forecast';
import Loading from './components/Loading';
import Error from './components/Error';
import Background from './components/Background';
import RecentSearches from './components/RecentSearches';
import { useWeather } from './hooks/useWeather';
import { useSearchHistory } from './hooks/useSearchHistory';

function App() {
  const [city, setCity] = useState('');
  const { weatherData, forecastData, loading, error } = useWeather(city);
  const { history, addToHistory, removeFromHistory, clearHistory } =
    useSearchHistory();

  const handleSearch = (searchCity) => {
    addToHistory(searchCity);
    setCity(searchCity);
  };

  const handleSelectFromHistory = (historyCity) => {
    setCity(historyCity);
  };

  return (
    <Background
      weatherId={weatherData?.weather?.[0]?.id}
      icon={weatherData?.weather?.[0]?.icon}
    >
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-start py-10 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
          Weather Dashboard
        </h1>
        <SearchBar onSearch={handleSearch} />
        <RecentSearches
          history={history}
          onSelect={handleSelectFromHistory}
          onRemove={removeFromHistory}
          onClear={clearHistory}
        />
        {loading && <Loading />}
        {error && <Error message={error} />}
        {weatherData && !loading && !error && (
          <>
            <WeatherCard data={weatherData} />
            <WeatherDetails data={weatherData} />
            <Forecast data={forecastData} />
          </>
        )}
        {!city && !loading && !error && (
          <p className="text-white/80 mt-12 text-center">
            Enter a city name to get started
          </p>
        )}
      </div>
    </Background>
  );
}

export default App;