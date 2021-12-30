import React from "react"
import Ramy from "../Ramy.jpg";

function Apropos() {
    return (
        <div className="header-wraper-apropos">
            <div>
            <a><img className="img-ramy" src={Ramy} alt="Ramy Tlili" /></a>
            </div>
        <div className="main-info-apropos">
            <h1>À propos de moi</h1>
            <p>Pour moi il n’y a pas de travail. Je n’aime pas le mot travail. Il
            est rébarbatif. <br/> Je préfère le mot passion. J’aimerais
            transformer le mot "passion" en verbe d’action comme travailler.</p>
            <h2>Diplômes</h2>
            <ul>
                <li className="li-apropos">Business intelligence IHEC Carthage tunis<br/> Depuis 2020</li>
                <li className="li-apropos">Baccalauréat en sciences économiques et de gestion Lycée<br/>sadiki Tunis - De 2018 à 2019 avec <b>Mention assez bien</b></li>
            </ul>
        </div>
        </div>
    )
}

export default Apropos
