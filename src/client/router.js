/*global PATH */

const page = require("page");

const { renderSlide, renderNotFoundSlide } = require("./renderSlide");

let currentId = 1;

function showPage(props) {
  if (props.params.id) {
    import(
      /* webpackChunkName: "[request]" */
      /* webpackPrefetch: true */ `${PATH}/${
        parseInt(props.params.id, 10) - 1
      }.md`
    ).then((module) => {
      import(
        /* webpackChunkName: "[request]" */ /* webpackPrefetch: true */ `../renderers/${module.state}.scss`
      );
    });
    import(
      /* webpackChunkName: "[request]" */
      /* webpackPrefetch: true */ `${PATH}/${
        parseInt(props.params.id, 10) + 1
      }.md`
    ).then((module) => {
      import(
        /* webpackChunkName: "[request]" */ /* webpackPrefetch: true */ `../renderers/${module.state}.scss`
      );
    });
    import(/* webpackChunkName: "[request]" */ `${PATH}/${props.params.id}.md`)
      .then((module) => {
        renderSlide(
          document.getElementsByClassName("slides")[0],
          module.state,
          module.html
        );
        currentId = parseInt(props.params.id, 10);
      })
      .catch((error) => {
        console.log(error);
        if (error.toString().includes("Cannot find module")) {
          notfound();
        }
      });
  }
}

function notfound() {
  renderNotFoundSlide(document.getElementsByClassName("slides")[0]);
}

export const slideTo = (id) => {
  // simple check to see if next exists
  import(`${PATH}/${id}.md`)
    .then(() => {
      page(`/${id}`);
    })
    .catch((error) => console.error(error));
};

export const slideNext = () => slideTo(currentId + 1);
export const slidePrev = () => slideTo(currentId - 1);

page("/", () => showPage({ params: { id: 1 } }));
page("/:id", showPage);
page("*", notfound);
page({
  // hashbang: true,
  click: false,
});
