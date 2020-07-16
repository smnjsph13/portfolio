import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="condiv home">
          <div className="hero-image"></div>
          <div className="home-text">
            <h1 style={{ fontSize: "40px", textShadow: "0 0 20px cornflowerblue"}}>
              <span style={{fontStyle: "Italic", fontWeight: "bolder"}}>Everything</span> is <span style={{textDecoration: "line-through", color: "gray"}}>IM</span><span style = {{textDecoration: "underline"}}>POSSIBLE</span>.
            </h1>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
