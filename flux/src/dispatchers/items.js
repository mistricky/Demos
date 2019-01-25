import { itemList } from "../stores/item-list";
import { Dispatcher } from "flux";

export let AppDispatcher = new Dispatcher();

AppDispatcher.register(action => {
  let { type, args } = action;

  switch (type) {
    case "ADD_ITEM":
      console.info("aaaaaaa");
      itemList.addItem(args);
      break;
    case "REMOVE_ITEM":
      itemList.removeItem(args);
  }
});
