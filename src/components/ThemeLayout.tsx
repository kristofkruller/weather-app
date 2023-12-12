import DarkModeButton from "./btn/DarkModeBtn"
import { ThemeLayoutProps } from "../../app"

const ThemeLayout = ({ children }: ThemeLayoutProps) => {
  return (
    <>
      <DarkModeButton />
      {children}
    </>
  )
}

export default ThemeLayout