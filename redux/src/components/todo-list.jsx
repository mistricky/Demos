import { Component } from "react";
import * as React from "react";
import "../styles/todo-list.css";
import { store } from "../store";
import { Item } from "./item";
import { boundAddTodo, boundRemoveTodo } from "../actions/todos";

export class TodoList extends Component {
  constructor() {
    super();

    this.state = store.getState();

    store.subscribe(() => {
      this.setState(store.getState());
      console.info(store);
    });

    this.store = store;
    this.unSubscribes = [];
  }

  componentWillUnmount() {
    this.unSubscribes.forEach(v => v());
  }

  handleAddItemClick() {
    boundAddTodo(this.input.value);
  }

  handleRemoveItemClick() {
    boundRemoveTodo(this.input.value);
  }

  render() {
    let todoList = store.getState().todos;
    let items = todoList.map((item, index) => (
      <Item text={item.text} handleDoneClick={boundRemoveTodo} key={index} />
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
          <button onClick={() => this.handleAddItemClick()}>Add Item</button>
          <button onClick={() => this.handleRemoveItemClick()}>
            Remove Item
          </button>
        </div>
      </div>
    );
  }
}
