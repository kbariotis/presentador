const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [image] = items;
  return `${writer.render(image)}`;
};
