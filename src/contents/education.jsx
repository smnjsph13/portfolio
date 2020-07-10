import React, { Component } from "react";
import Widecard from "../components/widecard";

class Education extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="subtopic">My Education</h1>
        <Widecard
          title="BS Electronics & Communication Engineering"
          where="Techonological Institute of the Philippines-Manila"
          from="June 2011"
          to="October 2016"
        />
        <h1 className="subtopic">Course/s Taken</h1>
        <Widecard
          title="The Complete Web Developer in 2020"
          where="Zero to Mastery - udemy.com"
        />
        <Widecard
          title="Mastering React"
          where="codewithmosh.com"
        />
        
      </div>
    );
  }
}
export default Education;
