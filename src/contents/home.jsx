import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="condiv home">
          <div className="hero-image"></div>
          <div className="home-text">
            <h1 style={{ fontSize: "50px" }}>Call me "Mon"</h1>
            <p>And I am Mr.Pogi of Valenzuela</p>
            <button>Hire me</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
