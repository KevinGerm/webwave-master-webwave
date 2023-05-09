import React from "react";
import data from '../../Json/aboutData.json'
import './style.css';

const About = () => {
  return (
    <div id='about'>
      <div className="row-container">
        <div className="image-container">
          <img src='./img/about.jpg' alt='about' />
        </div>
        <div className="col-container">
          <h1>
            <span className="company-title">Web Wave</span>, une agence web créative et dynamique
          </h1>
          {data.textContent.map((text, i) => {
            return(
              <div key={i}>
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
