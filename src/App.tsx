//ROUTER
import { Routes, Route } from "react-router-dom"

//PAGES
import Welcome from "./routes/Welcome"
import SearchBar from "./routes/SearchBar"
import Weather from "./routes/Weather"

//LAYOUTS N ASSETS
import ThemeLayout from "./components/ThemeLayout"
import RouteError from "./assets/RouteError"
import RouteLayout from "./components/RouteLayout"
import Error from "./assets/Error"

function App() {
  return (
    <ThemeLayout>
      <Routes>
        <Route element={<RouteLayout />} errorElement={<RouteError />}>
          <Route index element={<Welcome />} />
          <Route path="search" element={<SearchBar />} />
          <Route path="weather/:cityName" element={<Weather />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ThemeLayout>
  )
}

export default App
