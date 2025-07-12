import { Menu } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"

export default function Header({title, toggleSidebar}) {
    return (
        <div className="bg-yellow-400 p-4 flex justify-between items-center shadow">
        <button onClick={() => history.back()}>
            <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="text-black font-bold text-lg">{title}</h1>
        <button onClick={toggleSidebar} className="flex items-center gap-3">
            <Menu size={20} />
        </button >
        </div>
    )
}