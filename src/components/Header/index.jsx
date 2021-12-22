import { BiCaretRightCircle } from "react-icons/bi";
import { BiMenu, BiX } from "react-icons/bi";
import { useState } from "react"
 
export default function Header() {
    const [display, setDisplay] = useState(false)

    const handleDisplay = () => {
        setDisplay(display => !display)
    }

    return (
        <header className="page_header">
            <nav className="page_nav">
                <button className={!display ? 'logo-button show' : 'logo-button'}>
                    <BiCaretRightCircle className="logo-icon" /><span className="logo-name">CINE JS</span>
                </button>
                <button className="nav-button nav-item menu-button" onClick={handleDisplay}>
                    {
                        display ? <BiX className="menu-icon menu-open" /> : <BiMenu className="menu-icon" />
                    }
                </button>
                <ul className={display ? 'nav_list show' : 'nav_list'}>
                    <button className="nav-button"><li className="nav-item">Início</li></button>
                    <button className="nav-button"><li className="nav-item">Séries</li></button>
                    <button className="nav-button"><li className="nav-item">Filmes</li></button>
                </ul>
            </nav>
        </header>
    )
}