import React from 'react'
import logo from "../css/Petflix_Logo-01.png"

const About = () => {
    return (
      <div class="about">
          <div class="aboutapp">
              {/* <img src={logo} alt="Logo" className="logo"/> */}
              <p>
                Text about PetFlix will go here.
              </p>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            {/* Lam's Image */}
            <p>
               I am a data-driven, human-centric design expert with extensive history in communications 
               strategy and programming, eager to apply my passion for public service with my project 
               management and problem-solving skills to any challenge.
            </p>
            <a href="https://github.com/xlnl">
                Lam's Github
            </a>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            {/* Trez's Image */}
            <p>
               About Trez
            </p>
            <a href="https://github.com/NatrezC">
                Trez's Github
            </a>
          </div>
          <div class="developer">
            {/* Gabe's Image */}
            <p>
               About Gabe
            </p>
            <a href="https://github.com/granddivino">
                Gabe's Github
            </a>
          </div>
      </div>
    )
  }
  




export default About