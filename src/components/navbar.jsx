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
            <div id="home"><img class="image_on" src={profilepic} alt="logo" /><img class="image_off" src={profilepic1} alt="logo" /></div>
            <p style={{lineHeight: "70%"}}><span style={{fontSize: "90%", color: "white", fontWeight: "bolder"}}>Simon Joseph Azada</span><br></br><span style={{color:'cornflowerblue', fontSize: "70%", fontStyle: 'italic', fontWeight: "bold"}}>Front End Web Developer</span></p><br></br>
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
