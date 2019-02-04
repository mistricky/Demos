import {
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from "../actions/action-types";

const REQUEST_SUCCESS = "request success";
const REQUEST_FAILURE = "request failure";
const REQUEST_PENDING = "request pending";
const REQUEST_FREE = "free";

const initRequestState = {
  state: REQUEST_FREE,
  payload: "null"
};

export function request(state = initRequestState, action) {
  let { type, payload } = action;

  let generateState = obj => Object.assign({}, state, obj);

  switch (type) {
    case FETCH_POST_SUCCESS:
      return generateState({ state: REQUEST_SUCCESS, payload });
    case FETCH_POST_FAILURE:
      return generateState({ state: REQUEST_FAILURE, payload });
    case FETCH_POST_SUCCESS:
      return generateState({ state: REQUEST_PENDING, payload });
    default:
      return state;
  }
}
