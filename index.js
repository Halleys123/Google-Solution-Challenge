document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".solar").addEventListener("click", function () {
    console.log("solar");
    window.location = `solar.html`;
  });
  document.querySelector(".wind").addEventListener("click", function (event) {
    event.preventDefault();
    window.location = `wind.html`;
  });
});
