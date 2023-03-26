document.querySelectorAll(".link").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("Link clicked");
  });
});
const header = document.querySelector(".header");
const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      console.log("Header is in view");
    } else {
      console.log("Header is out of view");
    }
  });
};
const IntersectionObserver = new IntersectionObserver(callback, options);

IntersectionObserver.observe(header);
