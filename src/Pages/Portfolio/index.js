import React, { useState, useEffect } from "react";
import gridData from "../../Json/gridData.json"
import { BsSearch } from "react-icons/bs"
import "./style.css"
import Modal from "../../Component/Modal";

const Portfolio = () => {
  const [onHover, setOnHover] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [selectedItemId, setSelectedItemId] = useState(null);

  useEffect(() => {
    if(openModal){
      document.body.style.overflow = 'hidden'
    }else{
      document.body.style.overflow = 'auto'
    }
  }, [openModal])
  

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
                onClick={() => {
                  setOpenModal(true) 
                  setSelectedItemId(item.id)
                }}
              >
                <img
                  src={process.env.PUBLIC_URL + item.imageUrl}
                  alt={item.title} 
                />
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