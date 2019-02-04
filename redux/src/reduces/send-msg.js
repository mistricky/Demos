import { SEND_MSG } from "../actions/action-types";

export function sendMsg(state = "", action) {
  let { type, payload } = action;

  switch (type) {
    case SEND_MSG:
      return payload;
    default:
      return state;
  }
}
