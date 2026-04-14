import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import {
  setLocalities,
  setLoading as setLocalitiesLoading,
  setError as setLocalitiesError,
} from '../../redux/localitiesSlice';
import {
  setWeather,
  setLoading as setWeatherLoading,
  setError as setWeatherError,
} from '../../redux/weatherSlice';
import { addEntry } from '../../redux/historySlice';
import { fetchLocalities } from '../../services/localitiesService';
import { fetchWeather } from '../../services/weatherService';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import './HomePage.css';

function HomePage() {
  const dispatch = useAppDispatch();
  const { localities, loading: localitiesLoading, error: localitiesError } =
    useAppSelector((state) => state.localities);
  const {
    weather,
    loading: weatherLoading,
    error: weatherError,
  } = useAppSelector((state) => state.weather);

  useEffect(() => {
    if (localities.length === 0) {
      dispatch(setLocalitiesLoading(true));
      fetchLocalities()
        .then((data) => {
          dispatch(setLocalities(data));
        })
        .catch((err: Error) => {
          dispatch(setLocalitiesError(err.message));
        })
        .finally(() => {
          dispatch(setLocalitiesLoading(false));
        });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLocalityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const englishName = e.target.value;
    const hebrewName = e.target.options[e.target.selectedIndex].text;
    if (!englishName) return;

    dispatch(setWeatherLoading(true));
    dispatch(setWeatherError(null));
    dispatch(setWeather(null));

    fetchWeather(englishName)
      .then((data) => {
        dispatch(setWeather(data));
        dispatch(
          addEntry({
            timestamp: new Date().toLocaleString('he-IL'),
            localityName: hebrewName,
            country: data.location.country,
          })
        );
      })
      .catch((err: Error) => {
        dispatch(setWeatherError(err.message));
      })
      .finally(() => {
        dispatch(setWeatherLoading(false));
      });
  };

  const filteredLocalities = localities
    .filter((l) => {
      const he = l.city_name_he?.trim();
      const bureau = l.PIBA_bureau_name?.trim();
      return he && l.city_name_en?.trim() && he === bureau;
    })
    .sort((a, b) => a.city_name_he.localeCompare(b.city_name_he, 'he'));

  return (
    <div className="page" dir="rtl">
      <Navbar />
      <main className="home-main">
        <h1 className="page-title">מזג האוויר בישראל</h1>

        <div className="selector-wrapper">
          <label htmlFor="locality-select" className="selector-label">
            בחר יישוב:
          </label>
          {localitiesLoading ? (
            <p className="loading-text">טוען יישובים...</p>
          ) : localitiesError ? (
            <p className="error-text">שגיאה בטעינת יישובים: {localitiesError}</p>
          ) : (
            <select
              id="locality-select"
              className="locality-select"
              onChange={handleLocalityChange}
              defaultValue=""
            >
              <option value="" disabled>
                -- בחר יישוב --
              </option>
              {filteredLocalities.map((locality, index) => (
                <option key={index} value={locality.city_name_en.trim()}>
                  {locality.city_name_he.trim()}
                </option>
              ))}
            </select>
          )}
        </div>

        {weatherLoading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <p>טוען מזג אוויר...</p>
          </div>
        )}

        {weatherError && !weatherLoading && (
          <div className="error-box">
            <p>⚠️ {weatherError}</p>
          </div>
        )}

        {weather && !weatherLoading && (
          <div className="weather-card">
            <div className="weather-header">
              <img
                src={`https:${weather.current.condition.icon}`}
                alt={weather.current.condition.text}
                className="weather-icon"
              />
              <div>
                <h2 className="weather-city">{weather.location.name}</h2>
                <p className="weather-country">{weather.location.country}</p>
              </div>
            </div>
            <div className="weather-details">
              <div className="detail-item">
                <span className="detail-label">טמפרטורה</span>
                <span className="detail-value temp">{weather.current.temp_c}°C</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">תיאור</span>
                <span className="detail-value">{weather.current.condition.text}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">מהירות רוח</span>
                <span className="detail-value">{weather.current.wind_kph} kph</span>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
