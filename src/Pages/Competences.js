import React, { Component } from "react"
import NavBar from "../components/Navbar";
import Competences from "../components/Competences";


export class competences extends Component {
    render() {
        return (
            <>
                <NavBar/>
                <Competences/>
            </>
        )
    }
}

export default competences