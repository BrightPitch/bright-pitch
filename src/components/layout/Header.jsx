import { Menu } from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import Sidebar from "./Sidebar"
import { useState } from "react"

export default function Header({title}) {

    const [showSidebar, setShowSidebar] = useState(false);

    return (
        <div className="sticky top-0 z-50 bg-primary p-4 h-16 flex justify-between items-center shadow">
            <button onClick={() => history.back()}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </button>
            <h1 className="text-black font-semibold">{title}</h1>
            <button onClick={() => setShowSidebar(true)} className="flex items-center gap-3">
                <Menu size={24} />
            </button>
            <Sidebar isOpen={showSidebar} onClose={() => setShowSidebar(false)}></Sidebar>
        </div>
    )
}