import { AppDispatcher } from "../dispatchers/items";

export function addItem(item) {
  AppDispatcher.dispatch({
    type: "ADD_ITEM",
    args: item
  });
}

export function removeItem(item) {
  AppDispatcher.dispatch({
    type: "REMOVE_ITEM",
    args: item
  });
}
