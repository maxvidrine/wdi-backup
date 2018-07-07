import React, { Component } from 'react';

class Nav extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <Nav className="vertical-center">
      <nav>
        <a className="hamburger" href=""><i className="fa fa-bars"></i></a>
        <ul>
        <li><a href="index.html#about">About</a></li>
        <li><a href="index.html#gallery">Gallery</a></li>
        <li><a href="blog.html">Blog</a></li>
        <li><a href="index.html#contact">Contact</a></li>
        </ul>
      </nav>
      </Nav>
    )
  }
}

export default Nav
