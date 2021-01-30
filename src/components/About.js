import React from 'react'
import logo from "../css/images/Petflix_Logo-01.png"
import Lam from '../css/images/Lam.jpg'
import Trez from '../css/images/Trez.jpg'
import Gabe from '../css/images/Gabe.jpg'

const About = () => {
    return (
      <div className="about">
        <img src={logo} alt="Logo" className="aboutlogo"/>
          <div className="mainheader">
          
              <u>About Petflix & its Developers</u>
          </div>
          <div className="aboutapp">
              <p>
              This is the app for all animal lovers! Your pets want posts about them? They want an application that involves just the pets? They want to be posted at the waterparks, enjoying the nice sunsets, or even posted of them winning a pet race? Well The Callback Cats have an app for you pet lovers. Come sign up for an instagram version for your pets. No humans allowed!!
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
            <img src={Trez} className="DevImage2"/>
            <div className="aboutdev">
              <p>
                I am a Software Engineer focused on problem solving using many different variation of coding languages. With dedication, determination, and hard-work I plan to implement my skills into every single task that is placed in front of me. 
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