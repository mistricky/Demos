import * as React from "react";
import { Component } from "react";
import "../styles/item.css";

export class Item extends Component {
  render() {
    let { text, handleDoneClick } = this.props;

    return (
      <div className="item">
        <div>{text}</div>
        <button onClick={() => handleDoneClick()}>Done!</button>
      </div>
    );
  }
}
