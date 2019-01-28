import { ADD_TODO, REMOVE_TODO } from "../actions/action-types";

export function todo(state = [], action) {
  let { type, text } = action;

  switch (type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text,
          done: false
        }
      ];
    case REMOVE_TODO:
      let todos = state.slice();
      todos.splice(todos.findIndex(task => task.text === text), 1);

      return todos;

    default:
      return state;
  }
}
