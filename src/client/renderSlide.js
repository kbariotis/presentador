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

const renderSlide = (element, state, html) => {
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

const renderNotFoundSlide = (element) => {
  try {
    require("../renderers/twoHeaders.scss");
    element.outerHTML =
      '<div class="slides twoHeaders"><div class="container"><h1>Oh 😢, looks like this slide doesn\'t exist. Try taking a step back and start from the <a href="/">beginning</a>.</h1></div></div>';
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  renderSlide,
  renderNotFoundSlide,
};
