import {
  VISIBILITY_FILER_TYPES,
  SET_VISIBILITY_FILTER
} from "../actions/action-types";

export function setFilterMode(state = VISIBILITY_FILER_TYPES.SHOW_ALL, action) {
  let { filterType, type } = action;

  switch (type) {
    case SET_VISIBILITY_FILTER:
      return filterType;
    default:
      return state;
  }
}
