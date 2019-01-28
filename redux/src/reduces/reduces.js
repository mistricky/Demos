import { todo } from "./todos";
import { setFilterMode } from "./filter";

export function todoApp(state = {}, action) {
  return {
    todos: todo(state.todos, action),
    setFilterMode: setFilterMode(state.filterMode, action)
  };
}
