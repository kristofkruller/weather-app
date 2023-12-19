import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import MainBtn from '../components/btn/MainBtn'
import useCitySelection from '../store/hooks/useCitySelection'
import { useAppSelector } from '../store/hooks/useAppSelector'
import ActionBtn from '../components/btn/ActionBtn'
import { MdDeleteForever } from "react-icons/md";

const Welcome = () => {
  const navigate = useNavigate()
  const { handleRemoveCity } = useCitySelection()
  const cities = useAppSelector(state => state.selectedCities.cities)

  const [activeCity, setActiveCity] = useState<string | null>(null)

  const handleCityClick = (cityName: string) => {
    setActiveCity(cityName) // Set the active city name for highlighting
  }
  const handleGoLoc = () => {
    if (activeCity) {
      navigate(`/weather/${activeCity.toLowerCase()}`)
      setActiveCity(null)
    }
  }
  const handleGoSearch = () => {
      navigate(`/search/`)
      setActiveCity(null)
  }
  const handleDel = () => {
    if (activeCity) {
      handleRemoveCity(activeCity)
    }
    setActiveCity(null)
  }
  const handleClose = () => setActiveCity(null)

  return (
    <main className="[&>*]:my-2 md:[&>*]:my-3 [&>*]:text-center flex flex-col justify-center items-center">
      {cities.length < 1 && (
        <>
        <h1 className="cursor-default mb-1 font-mono text-xl text-slate-700 dark:text-sky-400 md:text-xl text-center">Welcome to weather
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
          className={`city w-full ${cityName.name === activeCity ? 'highlight-text' : ''}`}
          onClick={() => handleCityClick(cityName.name)}>
          <span className='flex justify-center items-center gap-2 flex-wrap'>
            {cityName.name}
            {cityName.name === activeCity && (
                <>
                <ActionBtn content='weather' onClick={handleGoLoc} />
                <MdDeleteForever className={'flex h-8 w-8 hover:animate-pulse'} onClick={handleDel} />
                </>
              )}
          </span>
        </div>
      ))}

      {activeCity && cities.length > 0 ? (<ActionBtn content='close' onClick={handleClose} />)
      : (<MainBtn content="add" onClick={handleGoSearch} />)}
    </main>
  )
}

export default Welcome
