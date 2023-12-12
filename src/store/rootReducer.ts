import { combineReducers } from "@reduxjs/toolkit"
import { weatherApiSlice } from "./slices/weatherApiSlice"
import selectedCitiesReducer from './slices/selectedCitiesSlice';

const rootReducer = combineReducers({
    [weatherApiSlice.reducerPath]: weatherApiSlice.reducer,
    selectedCities: selectedCitiesReducer,
})

export default rootReducer