const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [header, image] = items;
  return `<div class="top">${writer.render(
    header
  )}</div><div class="bottom">${writer.render(image)}</div>`;
};
