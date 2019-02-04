import * as React from "react";
import { render } from "react-dom";
import App from "./app";
import "./styles/global.css";
import { store } from "./store";
import { Provider } from "react-redux";

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
