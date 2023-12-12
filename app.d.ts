// COMPONENT INTERFACES
interface BtnProp {
  content: string,
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

interface ThemeLayoutProps {
  children: React.ReactNode
}

interface SelectedCitiesState {
  cities: City[]
}

interface RouteErrorProps {
  message?: string
}

// DATA INTERFACES
interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface MainWeather {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  humidity: number;
}

interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

interface WeatherResult {
  coord: {
    lon: number;
    lat: number;
  };
  weather: Weather[];
  base: string;
  main: MainWeather;
  visibility: number;
  wind: Wind;
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

interface City {
  name: string
  lat: number
  lon: number
  country: string
  state?: string
}

export {
  BtnProp,
  ThemeLayoutProps,
  RouteErrorProps,
  WeatherResult,
  City,
  SelectedCitiesState
}