import { ADD_TODO, REMOVE_TODO, SET_VISIBILITY_FILTER } from "./action-types";
import { store } from "../store";

let { dispatch } = store;

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

function removeTodo(text) {
  return {
    type: REMOVE_TODO,
    text
  };
}

function setVisibilityFilter(filterType) {
  return {
    type: SET_VISIBILITY_FILTER,
    filterType
  };
}

export const boundAddTodo = text => dispatch(addTodo(text));
export const boundRemoveTodo = text => dispatch(removeTodo(text));
export const boundSetVisibilityFilter = filterType =>
  dispatch(setVisibilityFilter(filterType));
