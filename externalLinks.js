document.querySelectorAll(".card2").forEach((card) => {
  card.addEventListener("click", () => {
    window.open(card.getAttribute("data-link"), "_blank");
  });
});
document.querySelectorAll(".link").forEach((entry) => {
  entry.addEventListener("click", (e) => {
    window.location = `${e.currentTarget.id}.html`;
  });
});
