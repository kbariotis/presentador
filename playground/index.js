const compiler = require("../src/compiler");

const codeMirror = require("codemirror");
require("codemirror/lib/codemirror.css");
require("codemirror/theme/base16-light.css");

require("./index.scss");
require(`../src/client/index.scss`);

const codemirror = codeMirror(
  document.getElementsByClassName("playground-editor")[0],
  {
    mode: "markdown",
    lineNumbers: true,
    lineWrapping: true,
    autofocus: true,
    value: `
## Presentation title

##### Description of the presentation
`,
  }
);

codemirror.on("change", (instance) => showResults(instance.getValue()));

const showResults = (source) => {
  const { html, state } = compiler(source);
  require(`../src/renderers/${state}.scss`);
  document.getElementsByClassName(
    "playground-results"
  )[0].innerHTML = `<div class="${state}">${html}</div>`;
};

showResults(codemirror.getValue());
