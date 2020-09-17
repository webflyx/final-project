import React from "react";

import "./Footer.scss";

export class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__text">
          © 2023 by Emily Fox Fitness. Proudly created with <a href="wix.com"> Wix.com</a>
        </div>
      </footer>
    );
  }
}
