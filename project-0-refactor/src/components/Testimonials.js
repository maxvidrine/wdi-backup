import React, { Component } from "react";

class Testimonials extends Component {
  render() {
    return (
      <section id='testimonials' className="single-column invert">
          <h3>Testimonials</h3>
          <article>
              <p>"Max is a delight to behold and a credit to his nation."</p>
              <h6>&mdash; Jane from Occupied Europe</h6>
          </article>
          <a href="#contact"><i className="fa fa-chevron-down fa-2x"></i></a>
      </section>
    )
  }
}

export default Testimonials;
