const screenfull = require("screenfull");

const fullScreenEl = document.getElementsByClassName("arrow-fullscreen")[0];
const exitFullScreenEl = document.getElementsByClassName(
  "arrow-exit-fullscreen"
)[0];

// Remove the main button if full screen is not supported
if (!screenfull.isEnabled) {
  fullScreenEl.remove();
}

// We listen for mouse events to assign hover class
// and we don't want to default link events to fire
fullScreenEl.onclick = (event) => event.preventDefault();
exitFullScreenEl.onclick = (event) => event.preventDefault();

// Add/remove classes on hover, trigger when mouse it released
fullScreenEl.onmousedown = (event) => {
  event.preventDefault();
  fullScreenEl.classList.add("active");
};
fullScreenEl.onmouseup = () => {
  fullScreenEl.classList.remove("active");
  if (screenfull.isEnabled) {
    exitFullScreenEl.classList.remove("hidden");
    fullScreenEl.classList.add("hidden");
    screenfull.toggle();
  }
};
fullScreenEl.onmousedown = (event) => {
  event.preventDefault();
  fullScreenEl.classList.add("active");
};
exitFullScreenEl.onmouseup = () => {
  exitFullScreenEl.classList.remove("active");
  if (screenfull.isEnabled) {
    fullScreenEl.classList.remove("hidden");
    exitFullScreenEl.classList.add("hidden");
    screenfull.toggle();
  }
};
