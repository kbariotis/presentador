const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [header, ...paragraphs] = items;
  return `<div class="top">${writer.render(
    header
  )}</div><div class="bottom">${paragraphs
    .map((item) => writer.render(item))
    .join("")}</div>`;
};
