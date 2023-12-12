import { WeatherDetailsProps } from '../../app'
import { getHumidityValue, getSunTime, getVisibilityValue, getWindDirection } from '../assets/helpers'
import { CiTempHigh } from "react-icons/ci"
import { FiSunrise } from "react-icons/fi"
import { FiSunset } from "react-icons/fi"
import { WiHumidity } from "react-icons/wi"
import { FaWind } from "react-icons/fa"
import { MdVisibility } from "react-icons/md"
import { GiDirectionSigns } from "react-icons/gi"

const WeatherDetails = ({weather}: WeatherDetailsProps) => {
  return (
    <>
    <p className='weather-det'><CiTempHigh className={'det-icon'}/>{weather.main.temp}°C</p>
    <p className='weather-det'><FiSunrise className={'det-icon'}/>{getSunTime(weather.sys.sunrise)}</p>
    <p className='weather-det'><FiSunset className={'det-icon'}/>{getSunTime(weather.sys.sunset)}</p>
    <p className='weather-det'><FaWind className={'det-icon'}/>{weather.wind.speed} m/s <GiDirectionSigns className={'det-icon ml-1'}/>{getWindDirection(weather.wind.deg)}</p>
    <p className='weather-det mt-5'>Feels like {weather.main.feels_like}°C</p>
    <p className='weather-det'><WiHumidity className={'det-icon'}/>{getHumidityValue(weather.main.humidity)}</p>
    <p className='weather-det'><MdVisibility className={'det-icon'}/>{getVisibilityValue(weather.visibility)}</p>
    </>
  )
}

export default WeatherDetails