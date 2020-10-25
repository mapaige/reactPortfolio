import React from "react";
 import {BrowserRouter as Router, Route } from "react-router-dom";
 import About from "./pages/About";
  import Portfolio from  "./pages/Portfolio"
  import Nav from "./components/Nav"
 import Header from "./components/Header";
 import Footer from "./components/Footer"

const App = function(){
  return(<Router>
    <Nav/>
    <Header/>
    <Route exact path="/" component ={About}/>
   
    <Footer/>
  </Router>)
}

export default App;


