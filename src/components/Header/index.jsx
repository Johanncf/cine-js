import { BiCaretRightCircle } from "react-icons/bi";

export default function Header() {
    return (
        <header className="page_header">
            <nav className="page_nav">
                <ul className="nav_list">
                    <button className="nav-button">
                        <li className="nav-item">
                            <BiCaretRightCircle id="logo-icon"/><span className="logo-name">CINE JS</span>
                        </li>
                    </button>
                    <button className="nav-button"><li className="nav-item">Início</li></button>
                    <button className="nav-button"><li className="nav-item">Séries</li></button>
                    <button className="nav-button"><li className="nav-item">Filmes</li></button>
                </ul>
            </nav>
        </header>
    )
}