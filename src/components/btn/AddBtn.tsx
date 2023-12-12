import { BtnProp } from "../../../app"

//ICONS
import { IoMdAdd } from "react-icons/io";
import { RiRestartLine } from "react-icons/ri"

const PlayBtn = ({ content, onClick }: BtnProp) => {
  const colorVariants = {
    border: content.toLowerCase() === "add" 
    ? "border-gray-200 opacity-30" 
    : "border-yellow-700 opacity-30 dark:shadow-sm", 
    body: content.toLowerCase() === "add" 
    ? "from-yellow-400/70 dark:from-gray-100/60 via-yellow-500/60 dark:via-gray-200/70 to-yellow-700/50 dark:to-gray-100/60 shadow-yellow-500/50 dark:shadow-white-800/80 opacity-1" 
    : "from-yellow-400 dark:to-yellow-300 via-yellow-500 to-yellow-700 shadow-yellow-500/50 dark:focus:ring-yellow-800 dark:shadow-yellow-800/80", 
    text: content.toLowerCase() === "add" 
    ? "text-gray-200" 
    : "text-yellow-700",
}
  return (
    <button type="button" onClick={onClick} className={`add-button opacity-90 hover:opacity-1 group ${colorVariants.border}`}>
      <span  className={`add-button-body group-hover:translate-x-0 ease ${colorVariants.body}`}>
          {content.toLowerCase() === "add" 
          ? <IoMdAdd  className="w-6 h-6 stroke-white animate-ping" /> 
          : <RiRestartLine  className="w-6 h-6 animate-spin" />}
      </span>
      <span  className={`add-button-text flex dark:text-neutral-50 transition-all duration-300 transform group-hover:translate-x-full ease uppercase ${colorVariants.text}`}>
        {content}
      </span>
      <span  className="relative invisible">{content}</span>
    </button>
  )
}

export default PlayBtn