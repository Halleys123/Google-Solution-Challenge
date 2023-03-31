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
var viewMode = getCookie("view-mode");
if (viewMode == "desktop") {
  viewport.setAttribute("content", "width=1024");
} else if (viewMode == "mobile") {
  viewport.setAttribute(
    "content",
    "width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no"
  );
}
