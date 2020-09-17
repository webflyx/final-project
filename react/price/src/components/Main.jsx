import React from "react";

import "./Main.scss";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="page-title">
          <h1>Choose Your Pricing Plan</h1>
        </section>

        <section className="pricing">
          <div className="pricing__description">
            I'm a paragraph. Click here to add your own text and edit me. <br /> Let your users get to know you.
          </div>
          <div className="pricing__row">
            <div className="pricing__col">
              <div className="pricing__col__content">
                <h2 className="pricing_title">Silver Membership</h2>
                <div className="pricing__price">
                  <span>$</span>30
                </div>
                <div className="pricing__mounth-pay"></div>
                <div className="pricing__for">Short-term trial for beginners</div>
                <div className="pricing__valid">Valid for one month</div>
                <button className="pricing-btn">Select</button>
                <div className="pricing__mob-arrow" id="silver">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path fill="#000" fillOpacity=".6" fillRule="evenodd" d="M10.95.293l.707.707L6 6.657.343 1 1.05.293 6 5.243l4.95-4.95z"></path>
                  </svg>
                </div>
              </div>
              <div className="pricing__col__benefit" id="silverBenif">
                <ul className="pricing__benefit-list">
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                </ul>
              </div>
            </div>
            <div className="pricing__col best">
              <div className="pricing__col__content">
                <h2 className="pricing_title">Gold Membership</h2>
                <div className="pricing__price">
                  <span>$</span>25
                </div>
                <div className="pricing__mounth-pay">Every month</div>
                <div className="pricing__for">Ideal for advanced trainees</div>
                <div className="pricing__valid">Valid for 12 months</div>
                <button className="pricing-btn">Select</button>
                <div className="pricing__mob-arrow pricing__mob-arrow-close" id="gold">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path fill="#000" fillOpacity=".6" fillRule="evenodd" d="M10.95.293l.707.707L6 6.657.343 1 1.05.293 6 5.243l4.95-4.95z"></path>
                  </svg>
                </div>
              </div>
              <div className="pricing__col__benefit pricing__col__benefit_active" id="goldBenif">
                <ul className="pricing__benefit-list">
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                </ul>
              </div>
            </div>
            <div className="pricing__col">
              <div className="pricing__col__content">
                <h2 className="pricing_title">Platinum Membership</h2>
                <div className="pricing__price">
                  <span>$</span>40
                </div>
                <div className="pricing__mounth-pay">Every month</div>
                <div className="pricing__for">Perfect for committed trainees</div>
                <div className="pricing__valid"></div>
                <button className="pricing-btn">Select</button>
                <div className="pricing__mob-arrow" id="plat">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="7" viewBox="0 0 12 7">
                    <path fill="#000" fillOpacity=".6" fillRule="evenodd" d="M10.95.293l.707.707L6 6.657.343 1 1.05.293 6 5.243l4.95-4.95z"></path>
                  </svg>
                </div>
              </div>
              <div className="pricing__col__benefit" id="platBenif">
                <ul className="pricing__benefit-list">
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                  <li className="pricing__benefit-li">I’m a benefit</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="contact" id="contact">
          <div className="contact__row">
            <div className="contact__col-address">
              <div className="contact__col-address__content">
                <h2 className="contact__address__title">Get in Touch</h2>
                <div className="contact__address__text">
                  <p>
                    I'm a paragraph. Click here to add <br /> your own text and edit me.
                  </p>
                  <p>
                    Address. 500 Terry Francois Street <br /> San Francisco, CA 94158
                  </p>
                  <p>
                    Email. info@mysite.com <br /> Phone. 123-456-7890
                  </p>
                </div>
              </div>
            </div>
            <div className="contact__col-form">
              <form action="#" className="contact-form">
                <input type="text" placeholder="First Name" name="first-name" className="contact-form__first-name" />
                <input type="text" placeholder="Last Name" name="last-name" className="contact-form__last-name" />
                <input required type="email" placeholder="Email" name="email" className="contact-form__email" />
                <input type="text" placeholder="Subject" name="subject" className="contact-form__subject" />
                <textarea name="text" placeholder="Type your message here..." className="contact-form__text"></textarea>
                <button className="contact-form__btn" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    );
  }
}
