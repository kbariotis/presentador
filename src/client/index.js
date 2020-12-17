require("./island/fullscreen");

const { slideNext, slidePrev } = require("./router");

const bodyEl = document.getElementsByTagName("body")[0];
const arrowLeftEl = document.getElementsByClassName("arrow-left")[0];
const arrowRightEl = document.getElementsByClassName("arrow-right")[0];

bodyEl.onkeyup = (event) => {
  if (event.key === "ArrowRight") {
    arrowRightEl.classList.remove("active");
    slideNext();
  }
  if (event.key === "ArrowLeft") {
    arrowLeftEl.classList.remove("active");
    slidePrev();
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
      slideNext();
    } else {
      arrowLeftEl.classList.add("active");
      slidePrev();
    }

    return;
  }
};

const clearAfterClick = (event) => {
  event.stopPropagation();
  arrowLeftEl.classList.remove("active");
  arrowRightEl.classList.remove("active");
};

arrowRightEl.onclick = (event) => event.preventDefault();
arrowLeftEl.onclick = (event) => event.preventDefault();
arrowRightEl.onmouseup = clearAfterClick;
arrowLeftEl.onmouseup = clearAfterClick;

arrowRightEl.onmousedown = (event) => {
  event.stopPropagation();
  event.preventDefault();
  arrowRightEl.classList.add("active");
  slideNext();
  return;
};
arrowLeftEl.onmousedown = (event) => {
  event.preventDefault();
  arrowLeftEl.classList.add("active");
  slidePrev();
  return;
};

bodyEl.onmousedown = handleClick;
bodyEl.onmouseup = clearAfterClick;
