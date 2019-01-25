import { Component } from "react";
import * as React from "react";
import { Items } from "./items";
import { itemList } from "./stores/item-list";
import { addItem, removeItem } from "./actions/itemsController";

export class ItemController extends Component {
  constructor() {
    super();

    this.state = {
      items: itemList.getList()
    };
  }

  componentDidMount() {
    itemList.addChangeListener(() => this._change());
  }

  componentWillUnmount() {
    itemList.removeChangeListener(() => this._change());
  }

  _change() {
    this.setState({
      items: itemList.getList()
    });
  }

  addItem(item) {
    addItem(item);
  }

  removeItem(item) {
    removeItem(item);
  }

  render() {
    let { items } = this.state;

    return (
      <div>
        <Items
          items={items}
          addItemOnClick={this.addItem}
          removeItemOnClick={this.removeItem}
        />
      </div>
    );
  }
}
