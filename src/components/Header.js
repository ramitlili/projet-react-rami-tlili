import React from "react"
import Typed from "react-typed";
import cv from "../cv.pdf";
const Header = () => {
    return (
     <div className="header-wraper">
         <div className="main-info">
             <h1>Projet React Ramy Tlili</h1>
             <Typed
              className="typed-text"
              strings={["PORTFOLIO","REACT", "IHEC CARTHAGE", "3 BI"]}
              typeSpeed={40}
              backSpeed={60}
              loop
             />
             <a href={cv} target="_blank" className="btn-main-offer">Voir mon cv</a>
         </div>
     </div>
    )
}

export default Header
