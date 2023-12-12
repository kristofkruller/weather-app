import { useState, useEffect } from "react"

import { IoMdCloudyNight } from "react-icons/io"
import { GiStripedSun } from "react-icons/gi"

const DarkModeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  //CHECK LS / APPLY on mount
  useEffect(() => {
    const currentMode = localStorage.getItem("darkMode")
    setIsDarkMode(currentMode === "true")
    document.body.classList.toggle("dark", currentMode === "true")
  }, [])

  //TOGGLE / UPDATE
  function toggleDarkMode() {
    setIsDarkMode(!isDarkMode)
    document.body.classList.toggle("dark")
    localStorage.setItem("darkMode", (!isDarkMode).toString())
  }

  return (
    <button
      className="relative lg:absolute lg:top-10 lg:right-20 2xl:top-20 2xl:right-40 active:animate-ping"
      onClick={toggleDarkMode}>
      {isDarkMode ? <GiStripedSun className="icon-basic" />
        : <IoMdCloudyNight className="icon-basic" />}
    </button>
  )
}
export default DarkModeButton