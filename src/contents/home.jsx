import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="condiv home">
          <div className="hero-image"></div>
          <div className="home-text">
            <h1 style={{ fontSize: "50px" }}>All is Well.</h1>
            <button>Hire me</button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
