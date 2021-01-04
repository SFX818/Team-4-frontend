import React from 'react'

const About = () => {
    return (
      <div class="about">
          <div class="aboutapp">
              <h1>
                  <strong>Petflix</strong>
              </h1>
              <p>
                Text about PetFlix will go here.
              </p>
          </div>
          <div class="developer1">
            {/* Lam's Image */}
            <p>
               About Lam
            </p>
            <a href="https://github.com/xlnl">
                Lam's Github
            </a>
          </div>
          <div class="developer2">
            {/* Trez's Image */}
            <p>
               About Trez
            </p>
            <a href="">
                Trez's Github
            </a>
          </div>
          <div class="developer3">
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