import React from "react";
import Button from "../../Component/Button";
import Maps from "./Maps";
import {BsFacebook, BsLinkedin} from 'react-icons/bs'
import './style.css';

const Contact = () => {
  return (
    <div id="contact">
      <div className="row-container">
        <div className="col-container">
          <div className="row-container">
            <div className="col-container carac">
              <span>Adresse</span>
              <span>15 rue de la vague - 88000 Épinal</span>
            </div>
            <div className="col-container carac">
              <span>Email</span>
              <span>contact.webwave@gmail.com</span>
            </div>
          </div>
          <div className="row-container">
            <div className="col-container carac">
              <span>Téléphone</span>
              <span>06-29-89-78-52</span>
            </div>
            <div className="col-container carac">
              <span>Suivez nous !</span>
              <span className="social-icons">
                <BsFacebook />
                <BsLinkedin />
              </span>
            </div>
          </div>
          <div className="row-container">
            <Maps />
          </div>
        </div>
        <form>
          <h3>Besoin d'un devis?</h3>
          <div className="row-container">
            <input className="form-input" type="text" placeholder="Nom"/>
          </div>
          <div className="row-container">
            <input className="form-input" placeholder="Prénom" type="text" />
          </div>
          <div className="row-container">
            <input className="form-input" placeholder="Email" type="email" />
          </div>
          <div className="row-container">
            <input className="form-input" placeholder="Téléphone" type="text" />
          </div>
          <div className="row-container">
            <textarea placeholder="Message" />
          </div>
          <Button>&nbsp;Envoyer&nbsp;</Button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
