import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
  <header id='top'>
      <div id="menu-small" className="menu pos-f-t">
          <nav className="navbar single-column">
              <button id="hamburger" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#dropdown" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation">
                  <i className="fa fa-bars fa-2x"></i>
              </button>
              <div className="collapse" id="dropdown">
                  <div className="menu-container">
                      <a href="#top" className='highlighted'><h4>Top</h4></a>
                      <a href="#about"><h4>About</h4></a>
                      <a href="#portfolio"><h4>Portfolio</h4></a>
                      <a href="#testimonials"><h4>Testimony</h4></a>
                      <a href="#contact"><h4>Contact</h4></a>
                  </div>
              </div>
          </nav>
      </div>
      <nav id="menu-big" className="menu">
          <div id="menu-container">
              <a href="#top" className='highlighted'><h3>Top</h3></a>
              <a href="#about"><h3>About</h3></a>
              <a href="#portfolio"><h3>Portfolio</h3></a>
              <a href="#testimonials"><h3>Testimony</h3></a>
              <a href="#contact"><h3>Contact</h3></a>
          </div>
      </nav>
      <nav>
          <span id="top"></span>
      </nav>
      <h1>Max</h1>
      <a href="#about"><i className="fa fa-chevron-down fa-2x"></i></a>
  </header>
  )
  }
}

export default Header;
