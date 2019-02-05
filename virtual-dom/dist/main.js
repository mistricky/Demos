"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var element_1 = require("./element");
var ele = element_1.Ele.ele;
var ul = new element_1.Ele("ul", { id: "list" }, [
    ele("li", { class: "item" }, ["Item1"]),
    ele("li", { class: "item" }, ["Item2"]),
    ele("li", { class: "item" }, ["Item3"])
]);
ul.render().bindDOM(document.querySelector("#root"));
