const commonmark = require("commonmark");

const { renderer } = require("./builder");

const reader = new commonmark.Parser();

module.exports = function (source) {
  const parsed = reader.parse(source);

  const walker = parsed.walker();
  let event;

  const machine = renderer();

  while ((event = walker.next())) {
    const node = event.node;
    if (event.entering) {
      // console.log("Walking into node", node.type);
      if (
        ["heading", "paragraph", "list", "image", "block_quote"].includes(
          node.type
        ) &&
        node.parent.type === "document"
      ) {
        if (node.firstChild.type === "image") {
          node.insertAfter(node.firstChild);
          node.unlink();
        } else {
          machine.add(node);
        }
      }
    }
  }

  const state = machine.getState();
  const rendererFn = require(`../renderers/${state}`);

  return `
export const html = ${JSON.stringify(
    `<div class="${state}">${rendererFn(machine.getItems())}</div>`
  )};
export const state = "${state}"`;
};
