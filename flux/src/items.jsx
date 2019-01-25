import * as React from "react";
import { Component } from "react";

export class Items extends Component {
  componentDidMount() {
    console.info(this.input);
  }

  render() {
    let { items, addItemOnClick, removeItemOnClick } = this.props;

    return (
      <div>
        <ul>
          {items.map(item => (
            <li>{item}</li>
          ))}
        </ul>

        <div>
          <input
            ref={input => (this.input = input)}
            type="text"
            placeholder="Please input name of item"
          />
        </div>
        <div>
          <button onClick={() => addItemOnClick(this.input.value)}>
            Add Item
          </button>
          <button onClick={() => removeItemOnClick(this.input.value)}>
            Remove Item
          </button>
        </div>
      </div>
    );
  }
}
