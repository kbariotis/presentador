require("./index.scss");

const renderSlide = async (element, state, html) => {
  try {
    // eslint-disable-next-line
    import(/* webpackChunkName: "[request]" */ `../renderers/${state}.scss`);
    element.outerHTML = html;

    if (state === "headerCodeblock") {
      const highlight = await import("./hljs");
      highlight.default();
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
