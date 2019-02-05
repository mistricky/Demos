import { Ele } from "./element";
let { ele } = Ele;

let ul = new Ele("ul", { id: "list" }, [
  ele("li", { class: "item" }, ["Item1"]),
  ele("li", { class: "item" }, ["Item2"]),
  ele("li", { class: "item" }, ["Item3"])
]);

ul.render().bindDOM(document.querySelector("#root"));
