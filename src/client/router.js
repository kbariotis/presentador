/*global PATH, __presentador_slides__ */

const page = require("page");

const { renderSlide, renderNotFoundSlide } = require("./renderSlide");

let currentId = 1;

function showPage(props) {
  if (props.params.id) {
    // Fetch the current slide
    // Not very sophisticated because the slide is rendered already
    import(/* webpackChunkName: "[request]" */ `${PATH}/${props.params.id}.md`)
      .then((module) => {
        // attach slide to the DOM
        renderSlide(
          document.getElementsByClassName("slides")[0],
          module.state,
          module.html
        );
        document.getElementsByClassName(
          "pos"
        )[0].innerText = `${props.params.id} / ${__presentador_slides__.length}`;

        currentId = parseInt(props.params.id, 10);

        const prevNumber = parseInt(props.params.id, 10) - 1;
        const nextNumber = parseInt(props.params.id, 10) + 1;
        if (__presentador_slides__.includes(prevNumber)) {
          // Prefetch next/previous slides
          import(
            /* webpackChunkName: "[request]" */
            /* webpackPrefetch: true */ `${PATH}/${prevNumber}.md`
          ).then((module) => {
            import(
              /* webpackChunkName: "[request]" */
              /* webpackPrefetch: true */
              `../renderers/${module.state}.scss`
            );
          });
        }
        if (__presentador_slides__.includes(nextNumber)) {
          import(
            /* webpackChunkName: "[request]" */
            /* webpackPrefetch: true */
            `${PATH}/${nextNumber}.md`
          ).then((module) => {
            import(
              /* webpackChunkName: "[request]" */
              /* webpackPrefetch: true */
              `../renderers/${module.state}.scss`
            );
          });
        }
      })
      .catch((error) => {
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
  if (__presentador_slides__.includes(id)) {
    page(`/${id}`);
  }
};

export const slideNext = () => slideTo(currentId + 1);
export const slidePrev = () => slideTo(currentId - 1);

page("/", () => showPage({ params: { id: 1 } }));
page("/:id", showPage);
page("*", notfound);
page({
  click: false,
});
