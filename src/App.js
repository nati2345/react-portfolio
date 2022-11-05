import React, { Component, useEffect } from "react";
// import ReactGA from "react-ga";
import "./App.css";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/home.js";
import Projects from "./component/Projects"
import Skills from "./component/Skills";
// import Footer from "./Components/Footer";
// import About from "./Components/About";
// import Resume from "./Components/Resume";
// import Contact from "./Components/Contact";
// import Portfolio from "./Components/Portfolio";
// console.log(data)
 
class App extends Component {
 
  render() {
    return (
      <div className="App" >
        <Navbar />
        <Home />
        <About />
       <Projects />
       <Skills />
       <Contact />
       <Footer />
      </div>
    );
  }
}

export default App;
