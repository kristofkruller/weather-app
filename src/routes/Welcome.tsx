import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AddBtn from '../components/btn/AddBtn'
import useCitySelection from '../store/hooks/useCitySelection'
import { useAppSelector } from '../store/hooks/useAppSelector'

const Welcome = () => {
  const navigate = useNavigate()
  const { handleRemoveCity } = useCitySelection()
  const cities = useAppSelector(state => state.selectedCities.cities)

  const [activeCity, setActiveCity] = useState<string | null>(null)

  const handleCityClick = (cityName: string) => {
    setActiveCity(cityName) // Set the active city name for highlighting
  }

  const handleGoToCityDetails = () => {
    if (activeCity) {
      navigate(`/location/${activeCity.toLowerCase()}`) // Navigate to city details page
    }
  }

  return (
    <main className="[&>*]:my-3 md:[&>*]:my-7 [&>*]:text-center flex flex-col justify-center items-center">
      {cities.length < 1 && (
        <>
        <h1 className="cursor-default mb-1 font-mono text-xl text-slate-700 dark:text-yellow-400 md:text-xl text-center">Welcome to weather
          <br />
          <span className="inline-flex h-10 pt-2 overflow-x-hidden animate-type group-hover:animate-type-reverse whitespace-nowrap text-brand-accent">
            by city app
          </span>
          <span className="box-border inline-block w-1 h-5 ml-2 -mb-1 bg-white md:-mb-1 md:h-5 animate-cursor"/>
        </h1>
        </>
      )}
      
      {cities.map((cityName, index) => (
        <div
          key={index}
          className={`${cityName.name === activeCity ? 'highlighted-class' : ''}`}
          onClick={() => handleCityClick(cityName.name)}>
          {cityName.name}
        </div>
      ))}

      {activeCity && (
        <>
          <button onClick={() => {
            handleGoToCityDetails()
            setActiveCity('')
          }}>Weather View</button>
          <button onClick={() => {
            handleRemoveCity(activeCity)
            setActiveCity('')
          }}>Remove</button>
        </>
      )}

      <AddBtn content="add" onClick={() => navigate("/capitals/")} />
    </main>
  )
}

export default Welcome
