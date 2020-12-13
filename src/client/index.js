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
      const { html, state } = require(`${PATH}/${props.params.id}.md`); // eslint-disable-line
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

const slideTo = (id) => {
  try {
    // simple check to see if next exists
    require(`${PATH}/${id}.md`); // eslint-disable-line
    page(`/${id}`);
  } catch (e) {
    // ignore
  }
};

const bodyEl = document.getElementsByTagName("body")[0];
const arrowLeftEl = document.getElementsByClassName("arrow-left")[0];
const arrowRightEl = document.getElementsByClassName("arrow-right")[0];

bodyEl.onkeyup = (event) => {
  if (event.key === "ArrowRight") {
    arrowRightEl.classList.remove("active");
    slideTo(currentId + 1);
  }
  if (event.key === "ArrowLeft") {
    arrowLeftEl.classList.remove("active");
    slideTo(currentId - 1);
  }
};
bodyEl.onkeydown = (event) => {
  if (event.key === "ArrowRight") {
    arrowRightEl.classList.add("active");
  }
  if (event.key === "ArrowLeft") {
    arrowLeftEl.classList.add("active");
  }
};

const handleClick = (event) => {
  const bodyEl = document.getElementsByClassName("slides")[0];

  if (event.target.tagName === "A") {
    // Do not interfere with links
    return;
  } else if (bodyEl.contains(event.target)) {
    // If It's anywhere else in the page
    const vw = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    const median = vw / 2;

    if (event.clientX > median) {
      arrowRightEl.classList.add("active");
      slideTo(currentId + 1);
    } else {
      arrowLeftEl.classList.add("active");
      slideTo(currentId - 1);
    }

    return;
  }
};

const clearAfterClick = () => {
  arrowLeftEl.classList.remove("active");
  arrowRightEl.classList.remove("active");
};

arrowRightEl.onclick = (event) => {
  event.preventDefault();
  arrowRightEl.classList.add("active");
  slideTo(currentId + 1);
  return;
};
arrowLeftEl.onclick = (event) => {
  event.preventDefault();
  arrowLeftEl.classList.add("active");
  slideTo(currentId - 1);
  return;
};

bodyEl.onmousedown = handleClick;
bodyEl.ontouchstart = handleClick;

bodyEl.ontouchend = clearAfterClick;
bodyEl.onmouseup = clearAfterClick;
