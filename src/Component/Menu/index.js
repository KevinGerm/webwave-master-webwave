import React, { useEffect, useRef } from 'react'
import {Link} from "react-router-dom"
import {RiMenuUnfoldLine, RiArticleLine} from "react-icons/ri"
import {HiOutlineHome} from "react-icons/hi"
import {GoInfo} from "react-icons/go"
import {GrServices, GrContactInfo} from "react-icons/gr"
import {GiAchievement} from "react-icons/gi"
import "./style.css"

const Menu = ({isActive, setIsActive, setHoveredIndex, setScrollPosition}) => {
  const menuToggle = useRef(null)
  const menuItems = useRef(null)

  const scrollToSection = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
      if(position > 0 && window.innerWidth > 1024){
        menuToggle.current.style.width = '40px'
        menuToggle.current.style.height = '40px'
      }else{
        menuToggle.current.style.width = '60px'
        menuToggle.current.style.height = '60px'
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

    
  }, [])

  return (
    <div className={`menu ${isActive ? "active" : ""}`} onClick={() => setIsActive(!isActive)}>
      <div className='toggle' ref={menuToggle}>
        <RiMenuUnfoldLine value={{className: 'icons-menu'}}/>
      </div>
      <ul>
        <li 
          style={{
            transform: "rotate(calc(360deg/8 * 0))",
            transitionDelay: "calc(0.1s * 0)"
          }}
          onMouseEnter={() => setHoveredIndex(0)} 
          onMouseLeave={() => setHoveredIndex(null)}
          ref={menuItems}
        >
          <Link 
            to="/" 
            title="Accueil" 
            style={{transform: "rotate(calc(360deg/-8 * 0))"}}
            onClick={(event) => scrollToSection(event, "home")}
            ref={menuItems}
          >
            <HiOutlineHome />
          </Link>
        </li>
        <li 
          style={{
            transform: "rotate(calc(360deg/8 * 1))",
            transitionDelay: "calc(0.1s * 1)"
          }}
          onMouseEnter={() => setHoveredIndex(1)} 
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link 
            to="/" 
            title="À Propos" 
            style={{transform: "rotate(calc(360deg/-8 * 1))"}}
            onClick={(event) => scrollToSection(event, "about")}
          >
            <GoInfo />
          </Link>
        </li>
        <li 
          style={{
            transform: "rotate(calc(360deg/8 * 2))",
            transitionDelay: "calc(0.1s * 2)"
          }}
          onMouseEnter={() => setHoveredIndex(2)} 
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link 
            to="/" 
            title="Services" 
            style={{transform: "rotate(calc(360deg/-8 * 2))"}}
            onClick={(event) => scrollToSection(event, "services")}
          >
            <GrServices />
          </Link>
        </li>
        <li 
          style={{
            transform: "rotate(calc(360deg/8 * 3))",
            transitionDelay: "calc(0.1s * 3)"
          }}
          onMouseEnter={() => setHoveredIndex(3)} 
          onMouseLeave={() => setHoveredIndex(null)}
          
        >
          <Link 
            to="/" 
            title="Porfolio" 
            style={{transform: "rotate(calc(360deg/-8 * 3))"}}
            onClick={(event) => scrollToSection(event, "portfolio")}
          >
            <GiAchievement />
          </Link>
        </li>
        <li 
          style={{
            transform: "rotate(calc(360deg/8 * 4))",
            transitionDelay: "calc(0.1s * 4)"
          }}
          onMouseEnter={() => setHoveredIndex(4)} 
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link 
            to='/'  
            title="Contact" 
            style={{transform: "rotate(calc(360deg/-8 * 4))"}}
            onClick={(event) => scrollToSection(event, "contact")}
          >
            <GrContactInfo />
          </Link>
        </li>
        <li 
          style={{
            transform: "rotate(calc(360deg/8 * 5))",
            transitionDelay: "calc(0.1s * 5)"
          }}
          onMouseEnter={() => setHoveredIndex(5)} 
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <Link to="/blog" title='Blog' style={{ transform: "rotate(calc(360deg/-8 * 5))"}}>
            <RiArticleLine />
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Menu