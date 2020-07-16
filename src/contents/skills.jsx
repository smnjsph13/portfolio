import React, { Component } from "react";
import htmllogo from "../img/html.png";
import csslogo from "../img/css.png";
import jslogo from "../img/js.png";
import reactlogo from "../img/react.jpg";
import bslogo from "../img/bs.png";
import ghlogo from "../img/gh.jpg";
import herologo from "../img/hero.png";

class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "REACT JS", "BOOTSTRAP", "GITHUB/HEROKU DEPLOYMENT"],
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="condiv skills">
          <h1 className="skills" >My Skills</h1>
            {/* <ul>
              {this.state.myskills.map((value) => {
                return <li>{value}</li>;
              })}
            </ul> */}
            <img className="skilllogo" src={htmllogo} alt="logo" />
            <img className="skilllogo" src={csslogo} alt="logo" />
            <img className="skilllogo" src={jslogo} alt="logo" />
            <img className="skilllogo" src={reactlogo} alt="logo" />
            <img className="skilllogo" src={bslogo} alt="logo" />
            <img className="skilllogo" src={ghlogo} alt="logo" />
            <img className="skilllogo" src={herologo} alt="logo" />
        </div>
      </React.Fragment>
    );
  }
}
export default Skills;
