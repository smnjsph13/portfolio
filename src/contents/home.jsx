import React, { Component } from "react";


class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="condiv home">
            <div className="hero-image">
              <div className="home-text" style={{ textShadow: "0 0 20px crimson", color: "white"}}>
                  <span style={{fontStyle: "Italic", fontWeight: "bolder"}}>Everything</span> is <span style={{textDecoration: "line-through", color: "black", fontWeight:"bolder"}}>IM</span><span style = {{textDecoration: "underline", fontWeight:"bolder"}}>POSSIBLE</span>.
              </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
  