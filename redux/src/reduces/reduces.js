import { todo } from "./todos";
import { setFilterMode } from "./filter";
import { request } from "./request";
import { sendMsg } from "./send-msg";

export function todoApp(state = {}, action) {
  return {
    todos: todo(state.todos, action),
    setFilterMode: setFilterMode(state.filterMode, action),
    request: request(state.request, action),
    send: sendMsg(state.send, action)
  };
}
