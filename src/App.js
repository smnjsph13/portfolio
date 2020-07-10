import React from "react";
import Home from "./contents/home";
import About from "./contents/about";
import Education from "./contents/education";
import Skills from './contents/skills';
import Contact from './contents/contact';
import "./App.css";
import { HashRouter, BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <HashRouter basename='/'>
      <div className="App">
        <Navbar />
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/education">
          <Education />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </div>   
    </HashRouter>
  );
}
export default App;
