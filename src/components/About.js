import React from 'react'
import logo from "../css/Petflix_Logo-01.png"
import Lam from '../css/Lam.jpg'
import Trez from '../css/Trez.jpg'
import Gabe from '../css/Gabe.jpg'

const About = () => {
    return (
      <div className="about">
        <img src={logo} alt="Logo" className="aboutlogo"/>
          <div className="mainheader">
          
              <u>About the Developers of Petflix</u>
          </div>
          <div className="aboutapp">
              <p>
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
              </p>
          </div>
          <div className="developer" style={{ width:"18rem"}}>
            <div className="name"><h2><u>Lam-Anh Le</u></h2></div>
            <img src={Lam} className="DevImage"/>
            <div className="aboutdev">
              <p>
                I am a data-driven, human-centric design expert with extensive history in communications 
                strategy and programming, eager to apply my passion for public service with my project 
                management and problem-solving skills to any challenge.
              </p>
            </div>
            <a href="https://github.com/xlnl" className="gitlink">
                Lam's Github
            </a>
          </div>
          <div className="developer" style={{ width:"18rem"}}>
            <div className="name"><h2><u>Trez Crawford</u></h2></div>
            <img src={Trez} className="DevImage"/>
            <div className="aboutdev">
              <p>
              I am a Software Engineer focused on problem solving using different variation of coding languages. With dedication, determination, and hard-work I plan to implement my skills into every single task that is placed towards me. 
              </p>
            </div>
            <a href="https://github.com/NatrezC" className="gitlink">
                Trez's Github
            </a>
          </div>
          <div className="developer" style={{ width:"18rem"}}>
            <div className="name"><h2><u>Gabriel Go</u></h2></div>
            <img src={Gabe} className="DevImage"/>
            <div className="aboutdev">
              <p>
              As a driven software engineer, I always look for innovative ways to expand my
              knowledge of programming techniques. My calling lies in front end development as I
              have a unique vision for aesthetic and conveying my product vision through my work.
              </p>
            </div>
            <a href="https://github.com/granddivino" className="gitlink">
                Gabe's Github
            </a>
          </div>
      </div>
    )
  }
  




export default About