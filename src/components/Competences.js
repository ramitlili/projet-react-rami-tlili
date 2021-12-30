import React from 'react'
import Ramy from "../Ramy.jpg";

function Competences() {
    
    return (
        <div className="header-wraper-apropos">
          <div className="section1-competences">
          <h1>Langage de programmation</h1>
          <ul>
            <li className="li-competences">Java</li>
            <li className="li-competences">Langage C</li>
            <li className="li-competences">Python </li>
            <li className="li-competences">Android</li>
            <li className="li-competences">PL/SQL</li>
          </ul>
        
          <h1>Web</h1>
          <ul>
              <li className="li-competences">HTML5</li>
              <li className="li-competences">CSS3</li>
              <li className="li-competences">PHP</li>
              <li className="li-competences">JavaScript</li>
              <li className="li-competences">REACT</li>
          </ul>
        </div>
        <div className="section2-competences">
        <h1>SGBD</h1>
        <ul>
            <li className="li-competences">Oracle</li>
            <li className="li-competences">MySQ</li>
            <li className="li-competences">XML</li>

        </ul>
        <h1 id='cms'>CMS</h1>
        <ul>
            <li className="li-competences">Wordpress</li>
            <li className="li-competences">PrestaShop</li>
        </ul>
        <h1>Outils collaboratifs</h1>
        <ul>
            <li className="li-competences">GitHub</li>
            <li className="li-competences">Trello</li>
            <li className="li-competences">Google Collabs</li>
        </ul>
        </div>
        <div className="section3-competences" >
        <h1>Logiciels</h1>
        <ul>
            <li className="li-competences">Pack Office</li>
            <li className="li-competences">Adobe premier pro</li>
            <li className="li-competences">Photoshop</li>
            <li className="li-competences">illustrator</li>
            <li className="li-competences">Sony Vegas</li>
            <li className="li-competences">Filmora 9</li>
        </ul>
        <h1>Outils IDES</h1>
        <ul>
            <li className="li-competences">Visual Code</li>
            <li className="li-competences">Code blocks</li>
            <li className="li-competences">NotePad++</li>
            <li className="li-competences">PyCharm</li>
        </ul>
        </div>
    </div>

    )
}

export default Competences
