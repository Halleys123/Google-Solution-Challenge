document.querySelectorAll(".link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Link clicked");
  });
});
const header = document.querySelector(".header");
// const options = {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// };
// const callback = (entries, observer) => {
//   entries.forEach((entry) => {
//     console.log(entry);
//     if (entry.isIntersecting) {
//       console.log("Header is in view");
//     } else {
//       console.log("Header is out of view");
//     }
//   });
// };
// const IntersectionObserver = new IntersectionObserver(callback, options);

// IntersectionObserver.observe(header);

// getClientBoundingRect();
// console.log(getComputedStyle(header, null).getPropertyValue("width"));
// document.querySelectorAll(".card2").forEach((card) => {
//   card.addEventListener("click", (e) => {
//     // console.log(e.target.style.getComputedValue("background-color"));
//     if (e.target.classList.contains("card2")) {
//       console.log(e.x);
//       console.log(e.target.getBoundingClientRect().right);
//       console.log(e.target.getBoundingClientRect().left);
//       const after = document.createElement("div");
//       e.target.position = "relative";
//       after.classList.add(".clickCircle");
//       after.style.top = e.offsetY + "px";
//       after.style.left = e.offsetX + "px";

//       e.target.overflow = "hidden";
//       e.target.after(after);
//       after.classList.add("clickCircleMax");
//     }
//   });
// });
