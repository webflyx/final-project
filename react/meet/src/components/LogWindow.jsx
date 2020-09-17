import React from "react";

import "./LogWindow.scss";

export class LogWindow extends React.Component {
  render() {
    return (
      <div className="log-window">
        <div className="log-window__close"></div>
        <div className="log-window__content">
          <h2 className="log-window__title">Sign Up</h2>
          <div className="log-window__already">
            Already a member? <a href="#">Log In</a>
          </div>
          <button className="log-facebook">Sign Up with Facebook</button>
          <button className="log-google">Sign Up with Google+</button>
          <div className="log-window__or">or</div>
          <button className="log-email">Sign Up with email</button>
        </div>
      </div>
    );
  }
}
