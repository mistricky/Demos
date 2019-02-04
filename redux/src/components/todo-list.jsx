import { Component } from "react";
import * as React from "react";
import "../styles/todo-list.css";
import { Item } from "./item";

export class TodoList extends Component {
  render() {
    let { todos, removeTodo, addTodo } = this.props;
    let items = todos.map((item, index) => (
      <Item text={item.text} handleDoneClick={removeTodo} key={index} />
    ));

    return (
      <div>
        <div className="todo-list">{items}</div>
        <input
          type="text"
          placeholder="Please input text of item"
          ref={input => (this.input = input)}
        />
        <div className="control">
          <button onClick={() => addTodo()}>Add Item</button>
          <button onClick={() => removeTodo()}>Remove Item</button>
        </div>
      </div>
    );
  }
}
