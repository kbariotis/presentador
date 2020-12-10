const page = require("page");

let currentId = 1;

require("./index.scss");

function showPage(props) {
  if (props.params.id) {
    try {
      const { html, state } = require(`${PATH}/${props.params.id}.md`);
      require(`../renderers/${state}.scss`);
      document.getElementsByTagName("body")[0].innerHTML = html;

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

document.getElementsByTagName("body")[0].onkeydown = (event) => {
  if (event.key === "ArrowRight") {
    page(`/${currentId + 1}`);
  }
  if (event.key === "ArrowLeft") {
    page(`/${currentId - 1}`);
  }
};
