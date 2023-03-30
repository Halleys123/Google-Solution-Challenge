document.addEventListener("DOMContentLoaded", function () {
  if (window.location == "index.html") {
    window.location = `solar.html`;
  }
});
// let callback = function (entries, observer) {
//   entries.forEach((entry) => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add("active");
//     } else {
//       entry.target.classList.remove("active");
//     }
//   });
// };
// document.querySelectorAll(".link").forEach(function (link) {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     document.querySelector(".typesOfEnergy").scrollIntoView(
//       {
//         behavior: "smooth",
//       },
//       1000
//     );
//   });
// });

// let observer = new IntersectionObserver(
//   (e) => {
//     e.forEach((entry) => {
//       if (entry.isIntersecting) {
//         console.log(entry);
//       }
//     });
//   },
//   {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
//   }
// );
// observer.observe(document.querySelector(".typesOfEnergy"));
