import React, { Component } from "react";
import Social from "../components/social";

class Contact extends Component {
  render() {
    return (
      <div className="condiv">
        <h1 className="contact"><center>How to reach me?</center></h1>
        <h3><center>Email : simon.azada@yahoo.com</center></h3>
        <h3><center>Contact # : +639566175363</center></h3>
        <Social />
      </div>
    );
  }
}
export default Contact;
