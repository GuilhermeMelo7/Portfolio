import React from "react";
import { Link } from "react-router-dom"
import { SHeader, SUl } from "../Styles/HeaderStyle"
 
function Header() {
    return(
        <SHeader>
            <h2>Portfólio</h2>
            <nav>
                <SUl>
                    <li>
                        <Link to="/">Inicio</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li>
                        <Link to="/projetos">Projetos</Link>
                    </li>
                </SUl>
            </nav>
        </SHeader>
    )
}

export default Header;