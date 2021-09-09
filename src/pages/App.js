import React from "react";

import { Switch, Route } from "react-router-dom"
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"
import {Link, Router} from "react-router-dom"
import Giphy from "./Giphy"

//pages 
import About from "./About"
import Contact from "./Contact"
import Home from "./Home"

//css
import "../App.css"


function App() {
  
    return (
      <div id="app">
        <Navbar />

      

        <Switch>
         
          <Route exact path="/">
          <Home />
          </Route>
          <Route exact path="/contact" >
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path ="/giphy">
            <Giphy />
          </Route>
        </Switch>
        <Footer />
       
      </div>
    );
  
}

export default App;

