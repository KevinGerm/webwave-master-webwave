import React, { useLayoutEffect, useRef, useState } from 'react'
import Menu from '../Menu'
import './style.css'


const Header = ({isDarkModeOn, setIsDarkModeOn}) => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const header = useRef(null)
  const logo = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const menuItems = ["Accueil", "À propos", "Services", "Porfolio", "Contact", "Blog"];
  
  useLayoutEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if(position > 0 && window.innerWidth > 1024) {
        header.current.style.backgroundColor = isDarkModeOn ? '#333' : "#fff";
      }else{
        header.current.style.backgroundColor = 'transparent'
        logo.current.style.backgroundColor = "#fff"

      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    
  }, [isDarkModeOn])
  

  return (
    <header ref={header}>
      {hoveredIndex !== null && <span className='menu-text'>{menuItems[hoveredIndex]}</span>}
      
      <div className='logo '>
        <img src='./img/logo.png' alt='logo' className='desk-logo'/>
        <img src='./img/contracted-logo.png' alt='logo' className='mobile-logo' ref={logo}/>
      </div>
     
      <Menu 
        isActive={isActive} 
        setIsActive={setIsActive} 
        setHoveredIndex={setHoveredIndex}
        setScrollPosition={setScrollPosition} 
      />
      <div className="wrapper" onClick={() => setIsDarkModeOn(!isDarkModeOn)}>
        <input type="checkbox" name="checkbox" className="switch"/>
      </div>
      <label htmlFor="theme" className="theme" onClick={() => setIsDarkModeOn(!isDarkModeOn)}> 
        <span className="theme__toggle-wrap">
          <input id="theme" className="theme__toggle" type="checkbox" role="switch" name="theme" value="dark" />
          <span className="theme__fill"></span>
          <span className="theme__icon">
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
            <span className="theme__icon-part"></span>
          </span>
        </span>
      </label>
    </header>
  )
}

export default Header