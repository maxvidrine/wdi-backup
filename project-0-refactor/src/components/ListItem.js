import React, { Component } from "react";

class ListItem extends Component {
  render() {
    return (
      <li>{this.props.listItem}</li>
    )
  }
}

export default ListItem;
