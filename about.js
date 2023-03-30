document.addEventListener("DOMContentLoaded", () => {
  let card = document.querySelectorAll(".personCard");

  setInterval(() => {
    card[0].classList.toggle("move");
  }, 1010);
  setTimeout(() => {
    setInterval(() => {
      card[1].classList.toggle("move");
    }, 1010);
  }, 150);
  setTimeout(() => {
    setInterval(() => {
      card[2].classList.toggle("move");
    }, 1010);
  }, 300);
  setTimeout(() => {
    setInterval(() => {
      card[3].classList.toggle("move");
    }, 1010);
  }, 450);

  card[0].addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/nikita-silu-9a743b257/");
  });
  card[1].addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/arnav-c-51072316b/");
  });
  card[2].addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/komal-kanwar-676a6924a/");
  });
  card[3].addEventListener("click", () => {
    window.open("https://github.com/Karanpal97");
  });

  card.forEach((card) => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("hover");
    });
    card.addEventListener("mouseleave", () => {
      card.classList.remove("hover");
    });
  });
  document.querySelector("input").addEventListener("click", () => {
    window.location = "index.html";
  });
});
