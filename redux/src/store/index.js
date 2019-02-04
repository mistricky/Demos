import createStore from "redux-create-store";
import { todoApp } from "../reduces/reduces";
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { deferredSend } from "../actions/todos";

export let store = createStore(todoApp, applyMiddleware(thunkMiddleware));

store.dispatch(deferredSend());

let next = store.dispatch;

store.dispatch = action => {
  console.info(action);
  let result = next(action);
  console.info(store.getState());

  return result;
};
