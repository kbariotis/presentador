const commonmark = require("commonmark");

const { renderer } = require("./builder");

const reader = new commonmark.Parser();

module.exports = (source) => {
  const parsed = reader.parse(source);
  const walker = parsed.walker();
  let event;

  const machine = renderer();

  while ((event = walker.next())) {
    const node = event.node;
    if (event.entering) {
      if (
        [
          "heading",
          "paragraph",
          "list",
          "image",
          "block_quote",
          "code_block",
        ].includes(node.type) &&
        node.parent.type === "document"
      ) {
        if (node.firstChild && node.firstChild.type === "image") {
          node.insertAfter(node.firstChild);
          node.unlink();
        } else if (node.type === "block_quote") {
          node.firstChild.firstChild.literal = `"${node.firstChild.firstChild.literal}"`;
          machine.add(node);
        } else {
          machine.add(node);
        }
      }
    }
  }

  const state = machine.getState();
  const rendererFn = require(`../renderers/${state}`);

  return {
    state,
    html: rendererFn(machine.getItems()),
  };
};
