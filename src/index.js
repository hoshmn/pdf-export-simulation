import Handlebars from "handlebars";
import { data } from "./data";
const template = require("./template.handlebars");

Handlebars.registerHelper("inc", (v) => +v + 1);
Handlebars.registerHelper("length", (v) => (Array.isArray(v) ? v.length : 0));
Handlebars.registerHelper("if_eq", (a, b, options) =>
  a === b ? options.fn(this) : options.inverse(this)
);
Handlebars.registerHelper("if_includes", (a, ...b) => {
  const [options] = b.slice(-1);
  const items = b.slice(0, -1);
  return items.includes(a) ? options.fn(this) : options.inverse(this);
});

const renderer = Handlebars.compile(template);
const html = renderer({
  ...data
});

document.getElementById("app").innerHTML = html;
