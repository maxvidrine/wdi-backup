import React, { Component } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";

class Main extends Component {
  render() {
    return (
      <main>
          <About />
          <Portfolio />
          <Testimonials />
          <Contact />
      </main>
    )
  }
}

export default Main;
