require("highlight.js/styles/github.css");

const page = require("page");

const hljs = require("highlight.js/lib/core");
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/javascript")
);
hljs.registerLanguage(
  "javascript",
  require("highlight.js/lib/languages/markdown")
);

let currentId = 1;

require("./index.scss");

function showPage(props) {
  if (props.params.id) {
    try {
      const { html, state } = require(`${PATH}/${props.params.id}.md`);
      require(`../renderers/${state}.scss`);
      document.getElementsByClassName("slides")[0].outerHTML = html;

      const codeBlocks = document.querySelectorAll("pre code");
      if (codeBlocks.length) {
        hljs.highlightBlock(codeBlocks[0]);
      }
      currentId = parseInt(props.params.id, 10);
    } catch (error) {
      console.error(error);
    }
  }
}

function notfound(props) {
  console.log("notfound", props);
}

page("/", () => page("/1"));
page("/:id", showPage);
page("*", notfound);
page({
  hashbang: true,
});

document.getElementsByTagName("body")[0].onkeyup = (event) => {
  event.preventDefault();

  if (event.key === "ArrowRight") {
    document
      .getElementsByClassName("arrow-right")[0]
      .classList.remove("active");
    page(`/${currentId + 1}`);
  }
  if (event.key === "ArrowLeft") {
    document.getElementsByClassName("arrow-left")[0].classList.remove("active");
    page(`/${currentId - 1}`);
  }
};
document.getElementsByTagName("body")[0].onkeydown = (event) => {
  event.preventDefault();

  if (event.key === "ArrowRight") {
    document.getElementsByClassName("arrow-right")[0].classList.add("active");
  }
  if (event.key === "ArrowLeft") {
    document.getElementsByClassName("arrow-left")[0].classList.add("active");
  }
};

const handleClick = (event) => {
  const bodyEl = document.getElementsByClassName("slides")[0];

  if (event.target.tagName === "A") {
    console.log(1);
  } else if (bodyEl.contains(event.target)) {
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const median = vw / 2;

    if (event.clientX > median) {
      document.getElementsByClassName("arrow-right")[0].classList.add("active");
      page(`/${currentId + 1}`);
    } else {
      document.getElementsByClassName("arrow-left")[0].classList.add("active");
      page(`/${currentId - 1}`);
    }

    return;
  }
};

const clearAfterClick = () => {
  document.getElementsByClassName("arrow-left")[0].classList.remove("active");
  document.getElementsByClassName("arrow-right")[0].classList.remove("active");
};

document.getElementsByClassName("arrow-right")[0].onclick = (event) => {
  event.preventDefault();
  document.getElementsByClassName("arrow-right")[0].classList.add("active");
  page(`/${currentId + 1}`);
  return;
};
document.getElementsByClassName("arrow-left")[0].onclick = (event) => {
  event.preventDefault();
  document.getElementsByClassName("arrow-left")[0].classList.add("active");
  page(`/${currentId - 1}`);
  return;
};

document.getElementsByTagName("body")[0].onmousedown = handleClick;
document.getElementsByTagName("body")[0].ontouchstart = handleClick;

document.getElementsByTagName("body")[0].ontouchend = clearAfterClick;
document.getElementsByTagName("body")[0].onmouseup = clearAfterClick;
