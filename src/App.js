import React from "react";
import Home from "./contents/home";
import About from "./contents/about";
import Education from "./contents/education";
import Skills from "./contents/skills";
import Works from "./contents/works";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/navbar";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
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
          <Route path="/works">
            <Works />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
