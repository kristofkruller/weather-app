import React, { useState, useEffect } from 'react'
import useCitySelection from '../store/hooks/useCitySelection'
import { City } from '../../app'
import { useNavigate } from 'react-router-dom'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCity, setSelectedCity] = useState<City | null>(null)
  const { cities, setSearchTerm: setSearchTermForApi, handleAddCity } = useCitySelection()

  const navigate = useNavigate()

  useEffect(() => {
    const timerId = setTimeout(() => {
      setSearchTermForApi(searchTerm)
    }, 600)

    return () => {
      clearTimeout(timerId)
    }
  }, [searchTerm])

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

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type="text"
        placeholder="Search for cities here"
        value={searchTerm}
        onChange={handleInputChange}
        className='w-full my-5 mx-0 p-2 rounded-lg'
      />

      {cities.length > 0 && (
        <div style={{ 
          opacity: cities.length > 0 ? 1 : 0}}>

          {cities.map((city: City, i) => (
            <div key={i} onClick={() => handleCitySelect(city)}>
              {city.name}, {city.country}{city.state && `, ${city.state}`}
            </div>
          ))}
        </div>
      )}

      {selectedCity && (
        <>
          <button onClick={handleSave}>Save</button>
          <button onClick={() => navigate('/')}>Back</button>
        </>
      )}
    </div>
  )
}

export default SearchBar
