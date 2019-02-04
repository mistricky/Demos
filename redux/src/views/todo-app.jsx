import { Component } from "react";
import * as React from "react";
import TodoList from "../containers/todos";
import RequestState from "../containers/request";

export class TodoApp extends Component {
  render() {
    return (
      <div>
        <TodoList />
        <RequestState />
      </div>
    );
  }
}
