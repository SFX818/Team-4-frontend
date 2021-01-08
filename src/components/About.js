import React from 'react'
import logo from "../css/Petflix_Logo-01.png"
import Lam from '../css/Lam.jpg'
import Trez from '../css/Trez.jpg'
import Gabe from '../css/Gabe.jpg'

const About = () => {
    return (
      <div class="about">
          <div class="mainheader">
              <u>About the Developers of Petflix</u>
          </div>
          <div class="aboutapp">
              <p>
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
                Text about PetFlix will go here.Text about PetFlix will go here.Text about PetFlix will go here.
              </p>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            <div class="name"><h2><u>Lam-Anh Le</u></h2></div>
            <img src={Lam} class="DevImage"/>
            <div class="aboutdev">
              <p>
               I am a data-driven, human-centric design expert with extensive history in communications 
               strategy and programming, eager to apply my passion for public service with my project 
               management and problem-solving skills to any challenge.
              </p>
            </div>
            <a href="https://github.com/xlnl" class="gitlink">
                Lam's Github
            </a>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            <div class="name"><h2><u>Trez Crawford</u></h2></div>
            <img src={Trez} class="DevImage"/>
            <div class="aboutdev">
              <p>
               My name is Trez. I have not given Gabe my brand statement or what I actually want to go here yet.
              </p>
            </div>
            <a href="https://github.com/NatrezC" class="gitlink">
                Trez's Github
            </a>
          </div>
          <div class="developer" style={{ width:"18rem"}}>
            <div class="name"><h2><u>Gabriel Go</u></h2></div>
            <img src={Gabe} class="DevImage"/>
            <div class="aboutdev">
              <p>
              As a driven software engineer, I always look for innovative ways to expand my
              knowledge of programming techniques. My calling lies in front end development as I
              have a unique vision for aesthetic and conveying my product vision through my work.
              A keen eye for originality makes me an asset as a developer and team member.
              </p>
            </div>
            <a href="https://github.com/granddivino" class="gitlink">
                Gabe's Github
            </a>
          </div>
      </div>
    )
  }
  




export default About