//REDUX
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

//IF
import { City, WeatherResult } from "../../../app"

export const BASE_URL = "https://api.openweathermap.org/"

export const weatherApiSlice = createApi({
  reducerPath: "weatherApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL
  }),
  // TAGTYPES for caching and invalidation
  tagTypes: ["Cities"],
  endpoints: builder => ({
    getWeather: builder.query<WeatherResult, string>({
      query: (city) => `/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&lang=en&units=metric`,
    }),
    searchCities: builder.query<City[], string>({
      query: (name) => `/geo/1.0/direct?q=${name}&limit=8&lang=en&appid=${import.meta.env.VITE_WEATHER_API_KEY}`,
      providesTags: ["Cities"],
    }),
  })
})

export const { useGetWeatherQuery, useSearchCitiesQuery } = weatherApiSlice