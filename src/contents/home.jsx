import React, { Component } from "react";
import Social from '../components/social';
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/profilepic.png";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img alt="pic" width="200px" height ="200px" src={profilepic} className="profilepic"></img><br></br>
        <ReactTypingEffect
          className="typingeffect"
          text={["I am Simon Joseph Azada.", "I am a Front End Web Developer."]}
          speed={100}
          eraseDelay={700}
          
        />
        <Social />
      </div>
    );
  }
}
export default Home;
