import React, { Component } from "react";
import ListItem from './ListItem'


class Article extends Component {
  render() {
    let list = this.props.list;
    let listItems = list.map((listItem, idx) => {return <ListItem listItem={listItem} key={idx} />});
    return (
      <article className="column col-md-6">
          <h5>{this.props.title}</h5>
          <h6>{this.props.subtitle}</h6>
          <ul>
            {listItems}
          </ul>
      </article>
    )
  }
}

export default Article;
