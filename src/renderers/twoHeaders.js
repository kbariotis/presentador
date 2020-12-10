const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [mainHeader, secondHeader] = items;
  return `<div class="top">${writer.render(
    mainHeader
  )}</div><div class="bottom">${writer.render(secondHeader)}</div>`;
};
