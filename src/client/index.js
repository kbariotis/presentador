const screenfull = require("screenfull");
const page = require("page");

let currentId = 1;

const renderSlide = require("./renderSlide");

function showPage(props) {
  if (props.params.id) {
    try {
      const { html, state } = require(`${PATH}/${props.params.id}.md`); // eslint-disable-line

      renderSlide(document.getElementsByClassName("slides")[0], state, html);

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
  click: false,
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
const fullScreenEl = document.getElementsByClassName("arrow-fullscreen")[0];

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
  const slidesContainerEl = document.getElementsByClassName("slides")[0];
  const iconsIslandEl = document.getElementsByClassName("icons")[0];

  if (event.target.tagName === "A" || iconsIslandEl.contains(event.target)) {
    // Do not interfere with links or the icons island
    return;
  } else if (slidesContainerEl.contains(event.target)) {
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

arrowRightEl.onmouseup = clearAfterClick;
arrowLeftEl.onmouseup = clearAfterClick;
arrowRightEl.onclick = (event) => event.preventDefault();
arrowLeftEl.onclick = (event) => event.preventDefault();
fullScreenEl.onclick = (event) => event.preventDefault();
fullScreenEl.onmouseup = () => {
  fullScreenEl.classList.remove("active");
  if (screenfull.isEnabled) {
    screenfull.request();
  }
};
fullScreenEl.onmousedown = (event) => {
  event.preventDefault();
  fullScreenEl.classList.add("active");
};
arrowRightEl.onmousedown = (event) => {
  event.preventDefault();
  arrowRightEl.classList.add("active");
  slideTo(currentId + 1);
  return;
};
arrowLeftEl.onmousedown = (event) => {
  event.preventDefault();
  arrowLeftEl.classList.add("active");
  slideTo(currentId - 1);
  return;
};

bodyEl.onmousedown = handleClick;
bodyEl.ontouchstart = handleClick;

bodyEl.ontouchend = clearAfterClick;
bodyEl.onmouseup = clearAfterClick;
