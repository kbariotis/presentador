const commonmark = require("commonmark");
const writer = new commonmark.HtmlRenderer();

module.exports = (items) => {
  const itemSize =
    items.length >= 2 && items.length <= 4
      ? "50%"
      : items.length >= 5 && items.length <= 7
      ? "33.3%"
      : items.length > 7
      ? "25%"
      : 0;

  return items
    .map(
      (item) =>
        `<div class="image" style="flex:${itemSize}">${writer.render(
          item
        )}</div>`
    )
    .join("");
};
