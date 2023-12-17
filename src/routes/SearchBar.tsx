import React, { useState, useEffect } from 'react'
import useCitySelection from '../store/hooks/useCitySelection'
import { City } from '../../app'
import { useNavigate } from 'react-router-dom'
import MainBtn from '../components/btn/MainBtn'
import { useAppSelector } from '../store/hooks/useAppSelector'
import { filterDuplicateCities } from '../assets/helpers'
import ActionBtn from '../components/btn/ActionBtn'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const { cities, setSearchTerm: setSearchTermForApi, handleAddCity } = useCitySelection()
  const selectedCities = useAppSelector(state => state.selectedCities.cities)
  const navigate = useNavigate()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTermForApi(searchTerm)
    }, 600)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchTerm])

  const uniqueCities = filterDuplicateCities(cities)

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value)
    setSelectedCity(null) // Reset selected city when search term changes
  }
  const handleCitySelect = (city: City) => {
    setSelectedCity(city)
  }
  const handleSave = () => {
    if (selectedCity) {
      handleAddCity(selectedCity)
      navigate('/')
    }
  }
  const handleHome = () => {
    navigate('/')
  }
  const isCitySelected = (cityName: string) => {
    return selectedCities.some(city => city.name === cityName)
  }

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search for cities here"
        value={searchTerm}
        onChange={handleInputChange}
        className='w-full mt-5 mx-0 p-2 rounded-lg'
      />

      {uniqueCities && (
        <div className={`transition ease-in-out duration-300 ${uniqueCities.length > 0 ? 'opacity-1' : 'opacity-0'}`}>
          {uniqueCities.map((city, i) => (
            <div key={i}
                 className={`city my-5 text-sm hover:text-white ${isCitySelected(city.name) ? 'city-disabled' : ''}`}
                 onClick={() => !isCitySelected(city.name) && handleCitySelect(city)}>
              {isCitySelected(city.name) ? (
                `${city.name} (added)`
              ) : (
                `${city.name}, ${city.country}${city.state ? `, ${city.state}` : ''}`
              )}
            </div>
          ))}
        </div>
      )}
      <div className='flex justify-center flex-wrap'>
        <MainBtn content={"back"} onClick={handleHome} />
        {selectedCity && <ActionBtn content={"save"} onClick={handleSave} />}
      </div>
    </div>
  )
}

export default SearchBar
