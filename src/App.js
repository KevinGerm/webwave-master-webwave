import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './settings.css';
import Layout from "./Component/Layout";
import HeroArea from "./Pages/HeroSection";
import About from "./Pages/About";
import Services from "./Pages/Services";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <Router>
      <Layout>
        <Route exact path="/">
          <HeroArea />
          <About />
          <Services />
          <Portfolio />
          <Contact />
        </Route>
      </Layout>
    </Router>
  );
}

export default App;
