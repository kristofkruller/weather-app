import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { City, SelectedCitiesState } from '../../../app'

const initialState: SelectedCitiesState = {
  cities: [],
}

const selectedCitiesSlice = createSlice({
  name: 'selectedCities',
  initialState,
  reducers: {
    addCity: (state, action: PayloadAction<City>) => {
      state.cities.push(action.payload)
    },
    removeCity: (state, action: PayloadAction<string>) => {
      state.cities = state.cities.filter(city => city.name !== action.payload)
    },
  },
});

export const { addCity, removeCity } = selectedCitiesSlice.actions
export default selectedCitiesSlice.reducer
