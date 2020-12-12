const page = require("page");

let currentId = 1;

require("./index.scss");

function showPage(props) {
  if (props.params.id) {
    try {
      const { html, state } = require(`${PATH}/${props.params.id}.md`);
      require(`../renderers/${state}.scss`);
      document.getElementsByClassName("slides")[0].outerHTML = html;

      currentId = parseInt(props.params.id, 10);
    } catch (e) {
      console.log(`${props.params.id} slide not found.`);
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
  if (event.key === "ArrowRight") {
    document
      .getElementsByClassName("arrow-right")[0]
      .classList.remove("active");
  }
  if (event.key === "ArrowLeft") {
    document.getElementsByClassName("arrow-left")[0].classList.remove("active");
  }
};
document.getElementsByTagName("body")[0].onkeydown = (event) => {
  if (event.key === "ArrowRight") {
    document.getElementsByClassName("arrow-right")[0].classList.add("active");
    page(`/${currentId + 1}`);
  }
  if (event.key === "ArrowLeft") {
    document.getElementsByClassName("arrow-left")[0].classList.add("active");
    page(`/${currentId - 1}`);
  }
};

const handleClick = (event) => {
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
};

const clearAfterClick = () => {
  document.getElementsByClassName("arrow-left")[0].classList.remove("active");
  document.getElementsByClassName("arrow-right")[0].classList.remove("active");
};

document.onmousedown = handleClick;
document.ontouchstart = handleClick;

document.ontouchend = clearAfterClick;
document.onmouseup = clearAfterClick;