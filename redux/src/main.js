import * as React from "react";
import { render } from "react-dom";
import App from "./app";
import "./styles/global.css";
import { store } from "./store";

render(<App />, document.querySelector("#root"));
