import type { Weather } from '../models/Weather';

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY as string;

export async function fetchWeather(cityEn: string): Promise<Weather> {
  const url = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${encodeURIComponent(cityEn)}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('לא ניתן לטעון מזג אוויר עבור יישוב זה');
  }
  return response.json() as Promise<Weather>;
}
