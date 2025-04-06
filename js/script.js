document.addEventListener("DOMContentLoaded", function () {
  new Splide("#image-carousel", {
    heightRatio: 0.5,
    cover: true,
    type: "loop",
    perPage: 2,
    breakpoints: {
      640: {
        perPage: 1,
      },
    },
  }).mount();
});
