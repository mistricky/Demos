import { Component } from "react";
import * as React from "react";

export class RequestState extends Component {
  render() {
    let { requestState, payload, onRequestClick, msg } = this.props;

    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        State: {requestState} Data: {payload}
        <button onClick={() => onRequestClick(this.input.value)}>
          request
        </button>
        <div>msg: {msg}</div>
      </div>
    );
  }
}
