const hljs = require("highlight.js/lib/core");

require("highlight.js/styles/github.css");

hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage(
  "markdown",
  require("highlight.js/lib/languages/markdown")
);

module.exports = () => {
  const codeBlocks = document.querySelectorAll("pre code");
  if (codeBlocks.length) {
    hljs.highlightBlock(codeBlocks[0]);
  }
};
