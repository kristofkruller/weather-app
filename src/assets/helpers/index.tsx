import { WiCloudy, WiDaySunny, WiRain } from 'react-icons/wi'
import { City } from '../../../app'

const getWindDirection = (deg: number): string => {
  if (deg > 15 && deg <= 75) return 'ÉK'

  if (deg > 76 && deg <= 105) return 'K'
  if (deg > 105 && deg <= 165) return 'DK'

  if (deg > 166 && deg <= 195) return 'D'
  if (deg > 195 && deg <= 255) return 'DNY'

  if (deg > 255 && deg <= 285) return 'NY'
  if (deg > 285 && deg <= 345) return 'ÉNY'

  return 'É'
}

const getHumidityValue = (level: number): string => {
  if (level <= 55) return 'Száraz és kényelmes'
  if (level > 55 && level <= 65) return 'Kicsit kényelmetlen, jelentős pára'

  return 'Nedves, párás és kényelmetlen'
}

const getVisibilityValue = (number: number): string => {
  if (number <= 50) return 'Veszélyesen ködös'
  if (number > 50 && number <= 500) return 'Nagyon ködös'
  if (number > 500 && number <= 2000) return 'Némi köd várható'
  if (number > 2000 && number <= 9000) return 'Kevés köd várható'

  return 'Tiszta'
}

const getSunTime = (timestamp: number): string => {
  const date = new Date(timestamp * 1000)
  let hours = date.getHours().toString()
  let minutes = date.getMinutes().toString()

  if (hours.length <= 1) hours = `0${hours}`
  if (minutes.length <= 1) minutes = `0${minutes}`

  return `${hours}:${minutes}`
}

const selectWeatherIcon = (icon: string) => {
  switch (icon) {
    case 'Clouds':
      return <WiCloudy />
    case 'Clear':
      return <WiDaySunny />
    case 'Rain':
      return <WiRain />
    // ...
    default:
      return null
  }
}

const filterDuplicateCities = (cities: City[]): City[] => {
  const uniqueCities = new Map<string, City>()

  cities.forEach(city => {
    const cityKey = `${city.name}-${city.country}-${city.state}`
    if (!uniqueCities.has(cityKey)) {
      uniqueCities.set(cityKey, city)
    }
  })

  return Array.from(uniqueCities.values())
}

export {
  getWindDirection,
  getHumidityValue,
  getVisibilityValue,
  getSunTime,
  selectWeatherIcon,
  filterDuplicateCities,
}