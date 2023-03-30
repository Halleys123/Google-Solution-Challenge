const options = {
  root: null,
  rootMargin: "-64px",
  threshold: 0,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      document.querySelector(".header").classList.add("sticky");
    } else {
      document.querySelector(".header").classList.remove("sticky");
    }
  });
};
const observer = new IntersectionObserver(callback, options);
observer.observe(document.querySelector(".front"));
