import React, { Component } from "react";
import Navitem from "./navitem";
import Social from './social';
import profilepic from "../img/profilepic.png";
import profilepic1 from "../img/simonprofile.jpg";


class Navbar extends Component {
    
  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            <div id="home"><img className="image_on" src={profilepic} alt="logo" /><img className="image_off" src={profilepic1} alt="logo" /></div>
            <p style={{lineHeight: "70%"}}><span className="myname" >Simon Joseph Azada</span><br></br><span className="myjob">Front End Web Developer</span></p><br></br>
            <Navitem item="Home" tolink="/"></Navitem>
            <Navitem
              item="About"
              tolink="/about"       
            ></Navitem>
            <Navitem
              item="Education"
              tolink="/education"        
            ></Navitem>
            <Navitem
              item="Skills"
              tolink="/skills"        
            ></Navitem>
            {/* <Navitem
              item="Contact"
              tolink="/contact"        
            ></Navitem> */}
          </ul>
          <Social />
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;
