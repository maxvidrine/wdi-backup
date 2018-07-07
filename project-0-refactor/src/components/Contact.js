import React, { Component } from "react";
import Footer from "./Footer";

class Contact extends Component {
  render() {
    return (
      <section id="contact" className="single-column">
          <h3>Contact Me</h3>
          <div className="container">
              <div className="row">
                  <div className="col-md-6">
                      <div className="row">
                          <input type="text" className="form-control form-control-lg text" name="name" placeholder="John Deere" />
                      </div>
                      <div className="row">
                          <input type="text" className="form-control form-control-lg text" name="email" placeholder="jdeere@gmail.com" />
                      </div>
                      <div className="row">
                          <input type="text" className="form-control form-control-lg text" name="subject" placeholder="Subject" />
                      </div>
                  </div>
                  <div className="column col-md-6">
                      <input type="textarea" className="form-control textarea" rows="30" name="name" placeholder="Write here" />
                  </div>
              </div>
              <div className="row">
                  <div className="column col-md-12">
                      <input type="submit" className="form-control form-control-lg button" />
                  </div>
              </div>
          </div>
          <Footer />
      </section>
    )
  }
}

export default Contact;
