import { useSearchCitiesQuery } from '../slices/weatherApiSlice'
import { addCity, removeCity } from '../slices/selectedCitiesSlice'
import { useAppDispatch } from './useAppSelector'
import { useState } from 'react'
import { City } from '../../../app'

// dedicated selector hook to refresh cached cities
const useCitySelection = () => {
  const dispatch = useAppDispatch()
  const [searchTerm, setSearchTerm] = useState('')
  const { data: cities = [], ...query } = useSearchCitiesQuery(searchTerm, {
    skip: searchTerm.length === 0, // Skip the query if no search term is entered
  })

  const handleAddCity = (city: City) => {
    dispatch(addCity(city))
    // Check q init
    if (query.isLoading || query.isSuccess || query.isError) {
      query.refetch()
    }
  }

  const handleRemoveCity = (cityName: string) => {
    dispatch(removeCity(cityName))
    // Check q init
    if (query.isLoading || query.isSuccess || query.isError) {
      query.refetch()
    }
  }

  return { cities, setSearchTerm, handleAddCity, handleRemoveCity }
}

export default useCitySelection
