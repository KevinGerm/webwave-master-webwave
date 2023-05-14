import React from "react";
import Button from "../../Component/Button";
import Card from "../../Component/Card";
import CardHeader from "../../Component/Card/CardHeader";
import CardBody from "../../Component/Card/CardBody";
import CardFooter from "../../Component/Card/CardFooter";
import cardData from "../../Json/cardData.json"
import './style.css'

const Services = () => {

  return (
    <div id="services">
      <h1>
        Chez <span className="company-title">Web Wave</span>, nous
        proposons...
      </h1>
      <div className="row-container">
        {cardData.map((card, i) => {
          return(
              <Card key={i}>
                <CardHeader>
                  <h2 className="pricing-title">{card.header.title}</h2>
                  <div className="pricing-price">
                    {card.header.subtitle}
                    <span className="pricing-currency"> €</span>
                    {card.header.price}
                  </div>
                </CardHeader>
                <CardBody>
                  <ul>
                    {card.body.listItems.map((item, i) => {
                      return <li className="pricing-feature" key={i}>{item}</li>
                    })}
                  </ul>
                </CardBody>
                <CardFooter>
                  <Button absolute>&nbsp;Devis&nbsp;gratuit&nbsp;</Button>
                </CardFooter>
              </Card>
          )
        })}
      </div>
    </div>
  );
};

export default Services;
