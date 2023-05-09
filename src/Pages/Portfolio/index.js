import React, { useState } from "react";
import gridData from "../../Json/gridData.json"
import { BsSearch } from "react-icons/bs"
import "./style.css"
import Modal from "../../Component/Modal";

const Portfolio = () => {
  const [onHover, setOnHover] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null);


  return (
    <div id="portfolio" className="grid-container">
        {gridData.map((item) => {
          return(
            <>
              <div 
                key={item.id} 
                className="image-item" 
                onMouseEnter={() => setOnHover(item.id)}
                onMouseLeave={() => setOnHover(false)}
              >
                <img
                  src={process.env.PUBLIC_URL + item.imageUrl}
                  alt={item.title} 
                />
                <p>je su</p>
                {onHover && 
                  <div 
                    className="row-container"
                  >
                    <BsSearch />
                    <span 
                      onClick={
                        () => {
                          setOpenModal(!openModal)
                          setSelectedItemId(item.id)
                        }
                      }>
                      Voir plus...
                    </span>
                  </div>
                }
                </div>
                {openModal && selectedItemId === item.id &&
                  <Modal 
                    item={item}
                    openModal={openModal}
                    setOpenModal={setOpenModal}
                  /> 
                }
              </>
          )
        })}
    </div>
  );
};

export default Portfolio;