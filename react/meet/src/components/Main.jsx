import React from "react";

import "./Main.scss";

export class Main extends React.Component {
  render() {
    return (
      <main className="main">
        <section className="page-title">
          <h1>Meet Emily</h1>
        </section>
        <section className="fitness-trainer">
          <div className="fitness-trainer__block1">
            <h2 className="fitness-trainer__title">Certified Fitness Trainer and Personal Coach</h2>
            <div className="fitness-trainer__text">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell
                a story and let your users know a little more about you.
              </p>
            </div>
            <button className="fitness-trainer__btn">Book a Class</button>
          </div>
          <div className="fitness-trainer__block2">
            <img src="./src/img/emily_sitting.webp" alt="" />
          </div>
          <div className="fitness-trainer__block3">
            <h2 className="fitness-trainer__title">My Vision</h2>
            <div className="fitness-trainer__text">
              <p>
                I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell
                a story and let your users know a little more about you.
              </p>
            </div>
          </div>
        </section>

        <section className="train-video">
          <video className="_3owv4" role="presentation" crossOrigin="anonymous" playsInline="" preload="auto" loop="" autoPlay="" width="1338" height="753" src="https://video.wixstatic.com/video/c22c23_685a75e0a78340c68cc24415d6d34ba6/1080p/mp4/file.mp4"></video>
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
