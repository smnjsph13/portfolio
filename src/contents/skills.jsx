import React, { Component } from "react";

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
          <div className="icons">
            <i className="devicon-html5-plain-wordmark colored" style={{marginRight:"5%", marginLeft: "2%"}}></i>
            <i className="devicon-css3-plain-wordmark colored" style={{marginRight:"5%"}}></i>
            <i className="devicon-javascript-plain colored" style={{marginRight:"5%"}}></i>
            <i className="devicon-react-original-wordmark colored" style={{marginRight:"5%"}}></i>
            <i className="devicon-bootstrap-plain-wordmark colored" style={{marginRight:"5%"}}></i>
            <i className="devicon-github-plain-wordmark colored" style={{marginRight:"5%"}} ></i>
            <i className="devicon-heroku-plain-wordmark colored"></i>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Skills;
