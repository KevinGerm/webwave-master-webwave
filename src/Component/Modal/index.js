import React, { useState } from 'react'
import './style.css'
import Button from '../Button'
import {FaReact, FaBootstrap, FaSymfony} from 'react-icons/fa'
import { Link } from "react-router-dom"
import {AiOutlineClose} from "react-icons/ai"

const Modal = ({item, openModal, setOpenModal}) => {
    const {title, imageUrl, description, link, tech} = item
    return (
        <div className='modal row-container' style={{alignItems: 'flex-start'}}>
            <AiOutlineClose onClick={() => setOpenModal(false)}/>
            <div className='col-container'>
                <div>
                    <img src={imageUrl} alt={title} />
                </div>
                <div>
                    <p>{description}</p>
                </div>
            </div>
            <div className='col-container' style={{height: '450px', justifyContent: "space-around"}}>
                <div>
                    <h2>{title}</h2>
                </div>
                <div>
                    <h3>Technologies utilisées</h3>
                    <div className='row-container' id="tech">
                        <FaReact />
                        <FaBootstrap />
                        <FaSymfony />
                    </div>
                </div>
                <Link to={link}><Button>&nbsp;Visiter&nbsp;le&nbsp;site&nbsp;</Button></Link>
            </div>
        </div>
    )
}

export default Modal