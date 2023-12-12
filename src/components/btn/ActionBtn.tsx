import { BtnProp } from "../../../app"

const ActionBtn = ({ content, onClick }: BtnProp) => {
    const colors = {
        type: content.toLowerCase() === "weather" 
        ? "bg-gray-700 dark:bg-white-200/60 hover:bg-gray-500/80 dark:hover:bg-gray-100/80 text-lg text-gray-300 hover:text-white dark:hover:text-sky-500 text-xs" 
        : content.toLowerCase() === "close" || "save"
        ? "bg-sky-800/20 hover:bg-sky-400 hover:text-white text-gray-300 hover:border-sky-300" 
        : "bg-gray-800 hover:bg-gray-700 hover:text-white text-gray-300",
    }

    return (
      <button type="button" onClick={onClick}
        className={`actionBtn hover:actionAnimOp uppercase ${colors.type}`}
      >
        {content}
      </button>
  )
}

export default ActionBtn