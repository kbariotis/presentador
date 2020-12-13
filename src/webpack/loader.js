const compiler = require("../compiler");

module.exports = function (source) {
  let state = "";
  try {
    const results = compiler(source);
    state = results.state;
    const html = results.html;

    return `
    export const html = ${JSON.stringify(
      `<div class="slides ${state}">${html}</div>`
    )};
      export const state = "${state}"`;
  } catch (error) {
    if (error.code === "MODULE_NOT_FOUND") {
      this.emitError(new Error(`Can't find renderer for state "${state}"`));
    } else {
      this.emitError(error);
    }

    return "";
  }
};
