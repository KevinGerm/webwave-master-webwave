import React, { useEffect, useRef, useState } from 'react'
import Menu from '../Menu'
import './style.css'


const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const header = useRef(null)
  const logo = useRef(null)
  const [scrollPosition, setScrollPosition] = useState(0)
  const menuItems = ["Accueil", "À propos", "Services", "Porfolio", "Contact", "Blog"];

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if(position > 0 && window.innerWidth > 1024){
        header.current.style.backgroundColor = '#FFFFFF'
      }else{
        header.current.style.backgroundColor = 'transparent'
        logo.current.style.backgroundColor = '#ffffff'

      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    
  }, [])
  

  return (
    <header ref={header}>
      {hoveredIndex !== null && <span className='menu-text'>{menuItems[hoveredIndex]}</span>}
      <div className='logo'>
          <img src='./img/logo.png' alt='logo' className='desk-logo'/>
          <img src='./img/contracted-logo.png' alt='logo' className='mobile-logo' ref={logo}/>
          
      </div>
      <Menu isActive={isActive} setIsActive={setIsActive} setHoveredIndex={setHoveredIndex}/>
    </header>
  )
}

export default Header