const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [header, ...rest] = items;
  const [image, ...paragraphs] = rest.reverse();

  return `<div class="left">${writer.render(
    header
  )}<div class="paragraphs">${paragraphs
    .map((item) => writer.render(item))
    .join("")}</div></div><div class="right">${writer.render(image)}</div>`;
};
