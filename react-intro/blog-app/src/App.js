import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comment from "./components/Comment";

var comments = [];

class Hello extends Component {

  render() {
    return (
      <div className="blogpost">
        <h1>Title: {this.props.title}</h1>
        <h2>Author: {this.props.author}</h2>
        <p>{this.props.body}</p>
        <div id="form">
          <form onSubmit={comments.push(this.value)} id="commentform">
            <textarea name="comment" value={this.state.value}>Here</textarea>
            <input type="submit" />
          </form>
        </div>
        <div id="comments">
          {comments.map(comment =>
            <Comment comment={comment} />
          )}

        </div>
      </div>
    );
  }
}

export default Hello;
