import { createStore } from "redux";
import { todoApp } from "../reduces/reduces";

export let store = createStore(todoApp, {});
