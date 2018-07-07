import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer>
          <nav>
              <a href="https://github.com/maxvidrine">
                  <i className="fab fa-github 5x"></i>
              </a>
              <a href="https://twitter.com/maxvidrine">
                  <i className="fab fa-twitter 5x"></i>
              </a>
              <a href="mailto:max.vidrine@gmail.com?subject=I%20saw%20your%20website">
                  <i className="fas fa-envelope 5x"></i>
              </a>
          </nav>
          <p>&copy;2018 Max Vidrine</p>
      </footer>
    )
  }
}

export default Footer;
