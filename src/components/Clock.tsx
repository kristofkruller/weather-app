import { useEffect, useState } from "react"

const Clock = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])
  const hours = currentTime.getHours().toString().padStart(2, '0')
  const minutes = currentTime.getMinutes().toString().padStart(2, '0')

  return (
    <>
      <div className="time">{hours}</div>
      <div className="time">{minutes}</div>
    </>
  )
}

export default Clock