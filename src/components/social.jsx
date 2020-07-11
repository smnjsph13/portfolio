import React, { Component } from "react"; 


class Social extends Component {
  render() {
    return (
      <div className="social">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <a href="https://github.com/smnjsph13" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-github" aria-hidden="true"></i>
        </a>
        <a href="https://Linkedin.com/in/smnjsph" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-linkedin" aria-hidden="true"></i>
        </a>
        <a href="https://Instagram.com/smnjsph" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-instagram" aria-hidden="true"></i>
        </a>
        <a href="https://www.facebook.com/smnjsph9" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-facebook-f" aria-hidden="true"></i>
        </a>
        <a href="https://twitter.com/smnjsph" target="_blank" rel="noopener noreferrer">
          <i className="fa fa-twitter" aria-hidden="true"></i> 
        </a>
      </div>
    );
  }
}
export default Social;
