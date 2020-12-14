const codeMirror = require("codemirror");
const { renderSlide } = require("../src/client/renderSlide");
const compiler = require("../src/compiler");

require("codemirror/lib/codemirror.css");
require("codemirror/theme/base16-light.css");
require("./playground.scss");
require(`../src/client/index.scss`);

const params = new URLSearchParams(document.location.search);

const codemirror = codeMirror(
  document.getElementsByClassName("playground-editor")[0],
  {
    mode: "markdown",
    lineNumbers: true,
    lineWrapping: true,
    autofocus: true,
    value:
      params.get("content") ||
      `
## Slide title

Description of this slide
`,
  }
);

codemirror.on("change", (instance) => showResults(instance.getValue()));

const showResults = (source) => {
  const { html, state } = compiler(source);
  renderSlide(
    document.getElementsByClassName("slides")[0],
    state,
    `<div class="slides ${state}">${html}</div>`
  );

  params.set("content", source);
  window.history.replaceState(null, null, `?${params.toString()}`);
};

showResults(codemirror.getValue());
