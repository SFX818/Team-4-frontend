import React from 'react'
import logo from "../css/Petflix_Logo-01.png"
import Lam from '../css/Lam.jpg'
import Trez from '../css/Trez.jpg'
import Gabe from '../css/Gabe.jpg'

const About = () => {
    return (
      <div class="about">
          <div class="aboutapp">
              <h1>About the Developers</h1>
              <p>
                Text about PetFlix will go here.
              </p>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            <h3>Lam-Anh Le</h3>
            <img src={Lam} class="DevImage"/>
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
            <h3>Trez Crawford</h3>
            <img src={Trez} class="DevImage"/>
            <p>
               I am a data-driven, human-centric design expert with extensive history in communications 
               strategy and programming, eager to apply my passion for public service with my project 
               management and problem-solving skills to any challenge.
            </p>
            <a href="https://github.com/NatrezC">
                Trez's Github
            </a>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            <h3>Gabriel Go</h3>
            <img src={Gabe} class="DevImage"/>
            <p>
              As a driven software engineer, I always look for innovative ways to expand my
              knowledge of programming techniques. My calling lies in front end development as I
              have a unique vision for aesthetic and conveying my product vision through my work.
              A keen eye for originality makes me an asset as a developer and team member.
            </p>
            <a href="https://github.com/granddivino">
                Gabe's Github
            </a>
          </div>
      </div>
    )
  }
  




export default About