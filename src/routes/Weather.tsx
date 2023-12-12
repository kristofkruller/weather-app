import { useParams, useNavigate } from 'react-router-dom'
import { useGetWeatherQuery } from '../store/slices/weatherApiSlice'
import { selectWeatherIcon } from '../assets/helpers'
import { WeatherResult } from '../../app'
import Loading from '../assets/Loading'
import Error from '../assets/Error'
import Clock from '../components/Clock'
import MainBtn from '../components/btn/MainBtn'
import WeatherDetails from '../components/WeatherDetails'

const Weather = () => {
  const cityName = useParams<{ cityName: string }>().cityName || ''
  const { data: weatherData, isError, isLoading } = useGetWeatherQuery(cityName)
  const navigate = useNavigate()

  if (isLoading) return <Loading />
  if (isError || !weatherData) return <Error message='Error loading weather data' />

  const weather: WeatherResult = weatherData
  const handleHome = () => {
    navigate('/')
  }

  return (
    <div className='flex flex-col items-center justify-center text-center my-5'>
      <Clock />
      <h1 className='city hover:transform-none mt-5 -mb-2'>{weather.name}</h1>
      {weather.weather.map((w, index) => (
        <div key={index} className='flex flex-col items-center justify-center'>
          {selectWeatherIcon(w.main)}
          <span className='city text-xs hover:transform-none mb-10 -mt-2 cursor-default'>{w.description}</span>
        </div>
      ))}
      <WeatherDetails weather={weather} />
      <div>
        <MainBtn content='back' onClick={handleHome} />
      </div>
    </div>
  )
}

export default Weather