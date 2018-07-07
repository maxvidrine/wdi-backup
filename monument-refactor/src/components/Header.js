import React, { Component } from 'react';

class Header extends Component {
  // what should the component render
  render () {
    // Make sure to return some UI
    return (
      <header className="vertical-center">
        <div>
          <h1><a href="index.html">Monument</a></h1>
        </div>
      </header>
    )
  }
}

export default Header
