import React, { Component } from "react";

class Works extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="condiv">
          <div className="projectGrid">
            <div className="box">
              <div className="project-title"> VideoXpress </div>
              <div className="project-content">
                An app that contains movie rentals with admin privilege that can modify anything and normal users that can view the movies available.
              </div>
              <div>
                <div className="democode">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://videoxpress.herokuapp.com/"
                  >
                    Demo
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/smnjsph13/videoexpress"
                  >
                    Code
                  </a>
                </div>
                <div className="box-icons grid-wrapper">
                  <i className="devicon-react-original colored"></i>
                  <i className="devicon-github-plain colored"></i>
                  <i className="devicon-html5-plain colored"></i>
                  <i className="devicon-css3-plain colored"></i>
                  <i className="devicon-heroku-plain colored"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="project-title">RoboFriends</div>
              <div className="project-content">
                An app that lets one filter through some robots. APIs were used
                both for the user details and robot image. This app can be used
                as a template from similar functions, for example address book.{" "}
              </div>
              <div>
                <div className="democode">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://smnjsph13.github.io/robofriends/"
                  >
                    Demo
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/smnjsph13/robofriends"
                  >
                    Code
                  </a>
                </div>
                <div className="box-icons grid-wrapper">
                  <i className="devicon-javascript-plain colored"></i>
                  <i className="devicon-react-original colored"></i>
                  <i className="devicon-github-plain colored"></i>
                  <i className="devicon-html5-plain colored"></i>
                  <i className="devicon-css3-plain colored"></i>
                  <i className="devicon-heroku-plain colored"></i>
                </div>
              </div>
            </div>
            <div className="box">
              <div className="project-title">Project Layout</div>
              <div className="project-content">
                A reusable and responsive landing page template layout.{" "}
              </div>
              <div>
                <div className="democode">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://smnjsph13.github.io/project-layout/"
                  >
                    Demo
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/smnjsph13/project-layout"
                  >
                    Code
                  </a>
                </div>
                <div className="box-icons">
                  <i className="devicon-github-plain colored"></i>
                  <i className="devicon-html5-plain colored"></i>
                  <i className="devicon-css3-plain colored"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Works;
