const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  return items.map((item) => writer.render(item)).join("");
};
