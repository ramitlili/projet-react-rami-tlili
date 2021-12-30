import React from 'react'
import logo from "../Logo.png";
// REACT FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
.<div class="container">
  <a className="navbar-brand" href="/"><img className="logo" src={logo} alt="Ramy Tlili" /></a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <FontAwesomeIcon icon={faBars} style={{color: "#ffff"}}/>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link" href="/">Accueil </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Apropos">À propos</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/Competences">Compétences</a>
      </li>
    </ul>
  </div>
</div>
</nav>
    )
}

export default NavBar
