import React from "react";
import Button from "../../Component/Button";
import WaveTitle from "../../Component/WaveTitle";
import './style.css'

const HeroArea = () => {
  return (
    <div id="home" className="col-container animate__animated animate__fadeIn">
    <WaveTitle>Surfez vers votre succès avec Web Wave</WaveTitle> 
      <div className="col-container home">
        <p className="p-center">
          Création de sites web sur mesure pour une expérience utilisateur
          unique
        </p>
        <Button>&nbsp;Confiez&nbsp;nous&nbsp;votre&nbsp;projet&nbsp;</Button>
      </div>
      <div className="row-container">
        <div className="col-container carac">
          <span>300+</span>
          <span>sites internet crées</span>
        </div>
        <div className="col-container carac">
          <span>150+</span>
          <span>Clients qui nous font confiance</span>
        </div>
        <div className="col-container carac">
          <span>200+</span>
          <span>notes 5 étoiles sur google</span>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
