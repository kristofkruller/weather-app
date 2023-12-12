import { BtnProp } from "../../../app"

//ICONS
import { IoMdAdd } from "react-icons/io"
import { RiRestartLine } from "react-icons/ri"

const MainBtn = ({ content, onClick }: BtnProp) => {
  const colorVariants = {
    border: content.toLowerCase() === "add" 
    ? "border-sky-600 opacity-1 dark:shadow-sm" 
    : "border-gray-200 opacity-30 dark:shadow-sm", 
    body: content.toLowerCase() === "add" 
    ? "from-sky-400/70 dark:from-gray-100/60 via-sky-500/60 dark:via-gray-200/70 to-sky-700/50 dark:to-gray-100/60 shadow-sky-500/50 dark:shadow-white-800/80 opacity-1" 
    : "from-sky-400/20 dark:to-gray-300/30 via-sky-500/70 to-sky-700/30 shadow-sky-500/50 dark:focus:ring-gray-200 dark:shadow-gray-800/80", 
    text: "text-gray-200 uppercase text-sm"
}
  return (
    <button type="button" onClick={onClick} className={`add-button opacity-90 hover:opacity-1 group ${colorVariants.border}`}>
      <span  className={`add-button-body group-hover:translate-x-0 ease ${colorVariants.body}`}>
          {content.toLowerCase() === "add" 
          ? <IoMdAdd  className="w-6 h-6 stroke-white animate-ping" /> 
          : <RiRestartLine  className="w-6 h-6 animate-spin" />}
      </span>
      <span  className={`add-button-text group-hover:translate-x-full flex ease ${colorVariants.text}`}>
        {content}
      </span>
      <span className="relative invisible">{content}</span>
    </button>
  )
}

export default MainBtn