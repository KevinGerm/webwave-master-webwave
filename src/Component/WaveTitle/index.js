import React from 'react'
import './style.css'

const WaveTitle = ({children, text}) => {
  return(
    <div className='wave-title'>
        <h1>{text}{children}</h1>
        <h1>{text}{children}</h1>
    </div>
  ) 
}

export default WaveTitle