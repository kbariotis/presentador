const { basename, extname } = require("path");
const compiler = require("../compiler");
const store = require("./store");

module.exports = function (source) {
  let state = "";

  try {
    const results = compiler(source);
    state = results.state;
    const html = `<div class="slides ${state}">${results.html}</div>`;

    const filename = basename(this.resourcePath, extname(this.resourcePath));

    store.set(filename, { html, state });

    return `
const html = ${JSON.stringify(html)};
const state = "${state}";

module.exports = {html, state};
      `;
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      this.emitError(new Error(`Can't find renderer for state "${state}"`));
    } else {
      this.emitError(error);
    }

    return "";
  }
};
