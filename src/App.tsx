//ROUTER
import { Routes, Route } from "react-router-dom"

//PAGES
import Welcome from "./routes/Welcome"
import Capitals from "./routes/Capitals"
import Location from "./routes/Location"

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
          <Route path="capitals" element={<Capitals />} />
          <Route path="location/:cityName" element={<Location />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </ThemeLayout>
  )
}

export default App
