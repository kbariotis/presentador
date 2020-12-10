const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const header = items[0];
  return `<div class="container">${writer.render(header)}</div>`;
};
