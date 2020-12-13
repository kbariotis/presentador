const hljs = require("highlight.js/lib/core");

require("highlight.js/styles/github.css");
require("./index.scss");

hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage(
  "markdown",
  require("highlight.js/lib/languages/markdown")
);

module.exports = (element, state, html) => {
  try {
    require(`../renderers/${state}.scss`);
    element.outerHTML = html;

    const codeBlocks = document.querySelectorAll("pre code");
    if (codeBlocks.length) {
      hljs.highlightBlock(codeBlocks[0]);
    }
  } catch (error) {
    console.error(error);
  }
};
