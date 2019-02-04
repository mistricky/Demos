import {
  ADD_TODO,
  REMOVE_TODO,
  SET_VISIBILITY_FILTER,
  REQUEST,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
  SEND_MSG
} from "./action-types";
import { store } from "../store";

let { dispatch } = store;

export function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

export function removeTodo(text) {
  return {
    type: REMOVE_TODO,
    text
  };
}

export function setVisibilityFilter(filterType) {
  return {
    type: SET_VISIBILITY_FILTER,
    filterType
  };
}

export function fetchPostRequest() {
  return {
    type: FETCH_POST_REQUEST
  };
}

export function fetchPostSuccess(data) {
  return {
    type: FETCH_POST_SUCCESS,
    payload: data
  };
}
export function fetchPostFailure(err) {
  return {
    type: FETCH_POST_FAILURE,
    payload: err
  };
}

export function send() {
  return {
    type: SEND_MSG,
    payload: "hello"
  };
}

export function deferredSend() {
  return dispatch => {
    setTimeout(() => dispatch(send()), 3000);
  };
}

export const boundAddTodo = text => dispatch(addTodo(text));
export const boundRemoveTodo = text => dispatch(removeTodo(text));
export const boundSetVisibilityFilter = filterType =>
  dispatch(setVisibilityFilter(filterType));
