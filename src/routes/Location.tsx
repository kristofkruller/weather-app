import { useParams, useNavigate } from 'react-router-dom'
import { useGetWeatherQuery } from '../store/slices/weatherApiSlice'
import { 
  getWindDirection, 
  getHumidityValue, 
  getVisibilityValue, 
  getSunTime, 
  selectWeatherIcon 
} from '../assets/helpers'
import { WeatherResult } from '../../app'
import Loading from '../assets/Loading'
import Error from '../assets/Error'
import Clock from '../components/Clock'

const CityDetails = () => {
  const cityName = useParams<{ cityName: string }>().cityName || ''
  const { data: weatherData, isError, isLoading } = useGetWeatherQuery(cityName)
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError || !weatherData) return <Error message='Error loading weather data' />

  const weather: WeatherResult = weatherData

  // Helper function to select appropriate weather icon

  return (
    <div>
      <h1>{weather.name}</h1>
      <Clock />

      {/* Weather details */}
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Feels Like: {weather.main.feels_like}°C</p>
      <p>Humidity: {getHumidityValue(weather.main.humidity)}</p>
      <p>Wind: {weather.wind.speed} m/s, Direction: {getWindDirection(weather.wind.deg)}</p>
      <p>Visibility: {getVisibilityValue(weather.visibility)}</p>
      <p>Sunrise: {getSunTime(weather.sys.sunrise)}</p>
      <p>Sunset: {getSunTime(weather.sys.sunset)}</p>

      {/* Weather icons */}
      {weather.weather.map((w, index) => (
        <div key={index}>
          {selectWeatherIcon(w.main)}
          <span>{w.description}</span>
        </div>
      ))}

      {/* Back Button */}
      <button onClick={() => navigate('/')}>Back to Home</button>
    </div>
  )
}

export default CityDetails