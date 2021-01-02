import React from "react"
import logo from "../css/Petflix_Logo-01.png"

// landing page for more info about Petflix
const Landing = () => {
    return (
        <div className="container">
            <header className="jumbotron">
                <h3>
                    <img src={logo} alt="Logo" className="logo" />
                    <strong>Welcome to Petflix!</strong>
                </h3>
            </header>
        </div>
    )
};
  
export default Landing;


