import { renderToString } from "react-dom/server";
import App from "./app";
import * as React from "react";

export function render() {
  return renderToString(<App />);
}
