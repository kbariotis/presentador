const renderer = () => {
  const items = [];

  let state = "normal";

  const states = {
    normal: {
      add: (item) => {
        if (item.type === "heading") return "singleHeader";
        if (item.type === "image") return "image";
        if (item.type === "block_quote") return "blockquote";
      },
    },
    blockquote: {
      add: (item) => {
        if (item.type === "paragraph") return "blockquote";
      },
    },
    singleHeader: {
      add: (item) => {
        if (item.type === "heading") return "twoHeaders";
        if (item.type === "paragraph") return "headerSingleParagraph";
        if (item.type === "list") return "headerList";
        if (item.type === "image") return "headerImage";
      },
    },
    headerSingleParagraph: {
      add: (item) => {
        if (item.type === "paragraph") return "headerManyParagraphs";
        if (item.type === "image") return "headerParagraphImage";
      },
    },
    headerManyParagraphs: {
      add: (item) => {
        if (item.type === "paragraph") return "headerManyParagraphs";
        if (item.type === "image") return "headerManyParagraphsImage";
      },
    },
  };

  return {
    getItems: () => items,
    getState: () => state,
    add: (item) => {
      // console.log("Adding item to state", state, item.type);
      items.push(item);
      if (states[state]) {
        const nextState = states[state].add(item);
        if (nextState) {
          state = nextState;
        }
      } else {
        state = "normal";
      }
    },
  };
};

module.exports = { renderer };
