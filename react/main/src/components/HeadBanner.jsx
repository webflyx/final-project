import React from "react";

import "./HeadBanner.scss";

export class HeadBanner extends React.Component {
  render() {
    return (
      <section className="head-banner">
        <div className="head-banner__img">
          <div className="head-banner__content">
            <h1 className="head-banner__title">Emily Fox</h1>
            <div className="head-banner__description">
              Discover Your Power <br /> Through Online Coaching
            </div>
            <div className="head-banner__social">
              <div className="head-banner__social__item">
                <img src="./src/img/4057345bcf57474b96976284050c00df.png" />
              </div>
              <div className="head-banner__social__item">
                <img src="./src/img/870f97661ed14a5bb2d96ecbddec0aed.png" alt="" />
              </div>
              <div className="head-banner__social__item">
                <img src="./src/img/45bce1d726f64f1999c49feae57f6298.png" alt="" />
              </div>
              <div className="head-banner__social__item">
                <img src="./src/img/inst.webp" alt="" />
              </div>
            </div>
          </div>
          <div className="head-banner__btn">
            <div className="head-banner__discover">Discover FoxFit</div>
            <div className="head-banner__book">Book a className</div>
          </div>
        </div>
      </section>
    );
  }
}
