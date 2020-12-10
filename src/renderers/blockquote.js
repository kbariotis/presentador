const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const [quote, author] = items;

  return `<div class="top">${writer.render(
    quote
  )}</div><hr/><div class="bottom">${writer.render(author)}</div>`;
};
