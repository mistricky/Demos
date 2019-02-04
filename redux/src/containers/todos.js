import { connect } from "react-redux";
import { addTodo, removeTodo } from "../actions/todos";
import { TodoList } from "../components/todo-list";

let mapStateToProps = state => ({
  todos: state.todos
});

let mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addTodo(text)),
  removeTodo: text => dispatch(removeTodo(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
