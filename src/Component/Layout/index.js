import React, { useState } from 'react'
import Footer from '../Footer'
import Header from '../Header'
import { BrowserRouter as Switch, Route } from "react-router-dom"
import BackgroundLine from '../BackroundLine'
import HeroArea from '../../Pages/HeroSection'
import About from '../../Pages/About'
import Services from '../../Pages/Services'
import Portfolio from '../../Pages/Portfolio'
import Contact from '../../Pages/Contact'
import Blog from '../../Pages/Blog'

const Layout = () => {


  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  const backgroundColor = isDarkModeOn ? "#333" : "#fff";
  const color = isDarkModeOn ? "#fff" : "#333";
  const colorReverse = isDarkModeOn ? "#333" : "#fff";

  return (
    <div  style={{ backgroundColor, color }}>
      <BackgroundLine />
      <Header setIsDarkModeOn={setIsDarkModeOn} isDarkModeOn={isDarkModeOn}/>
        <main>
          <Switch>
            <Route exact path="/" component={() => (
              <>
                <HeroArea />
                <About />
                <Services />
                <Portfolio />
                <Contact />
              </>
            )}/>
            <Route path='/blog' component={Blog}/>
          </Switch>
        </main>
        <style>
          {`
            h1,h2,h3,h4,h5,h6,ul,li,a,::placeholder { color: ${color}; }

            .wave-title > h1:nth-child(1) {
              -webkit-text-stroke: 2px ${color};
            }
            .button{
              color: ${color};
            }

            .toggle{
              background: ${colorReverse};
            }
            .toggle svg{
              color: ${color};
            }
            .modal{
              background-color: ${isDarkModeOn ? 'rgba(0, 0,0, 0.40)' : 'rgba(255, 255, 255, 0.40)'};
            }
          `}
        </style>
      <Footer />
    </div>
  )
}

export default Layout