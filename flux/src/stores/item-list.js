import { EventEmitter } from "events";

class ItemList extends EventEmitter {
  constructor() {
    super();
    this.items = [];
  }

  emitListChanged() {
    this.emit("change");
  }

  addItem(item) {
    this.emitListChanged();
    this.items.push(item);
  }

  removeItem(item) {
    this.emitListChanged();
    this.items.splice(this.items.indexOf(item), 1);
  }

  addChangeListener(cb) {
    this.on("change", cb);
  }

  removeChangeListener(cb) {
    this.removeListener("change", cb);
  }

  getList() {
    return this.items;
  }
}

export let itemList = new ItemList();
