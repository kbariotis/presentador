const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [header, paragraph, image] = items;
  return `<div class="left">${writer.render(header)}${writer.render(
    paragraph
  )}</div><div class="right">${writer.render(image)}</div>`;
};
