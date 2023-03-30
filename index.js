document.addEventListener("DOMContentLoaded", function () {
  // document.querySelector(".solar").addEventListener("click", function () {
  //   console.log("solar");
  //   window.location = `solar.html`;
  // });
});
document.querySelectorAll(".item").forEach((entry) => {
  entry.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    if (
      e.currentTarget.classList.contains(`item1`) ||
      e.currentTarget.classList.contains(`item2`) ||
      e.currentTarget.classList.contains(`item3`)
    ) {
      return;
    } else {
      window.location = `${e.currentTarget.id}.html`;
    }
  });
});

document.querySelectorAll(".card2").forEach((entry) => {
  entry.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    window.location = `${e.currentTarget.id}.html`;
  });
});

document.querySelectorAll(".link").forEach((entry, index, arr) => {
  entry.addEventListener("click", (e) => {
    console.log(e.currentTarget.id);
    if (index == 0 || index == arr.length - 1) {
      window.location = `${e.currentTarget.id}.html`;
    } else {
      document.querySelector(`.${e.target.id}`).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    }
  });

  const whatObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const image = document.querySelectorAll(".mainImage");
        image[0].src = "./resources/cityPlan.webp";
        image[1].src = "./resources/cityLooksLike.webp";
        image[2].src = "./resources/crossRoad.webp";
        image.forEach((image) => {
          image.classList.remove("blur");
        });
        observer.unobserve(entry.target);
      }
    }),
      {
        root: null,
        threshold: 0,
        rootMargin: "-50px",
      };
  });
  whatObserver.observe(document.querySelector(".what"));
  const readMoreObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const image = document.querySelectorAll(".cardTwoImage");
        image[0].src = "./resources/Importance.webp";
        image[1].src = "./resources/importances.webp";
        image[2].src = "./resources/cope.webp";
        image.forEach((image) => {
          image.classList.remove("blur");
        });

        observer.unobserve(entry.target);
      }
    }),
      {
        root: null,
        threshold: 0,
        rootMargin: "-30px",
      };
  });
  readMoreObserver.observe(document.querySelector(".readMore"));
  const renewObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log(entry.target);
        const image = document.querySelectorAll(".sixImage");
        image[0].src = "./resources/energy.webp";
        image[1].src = "./resources/sea.webp";
        image[2].src = "./resources/tractor.webp";
        image[3].src = "./resources/dam.webp";
        image[4].src = "./resources/seaThumb.webp";
        image[5].src = "./resources/wind.webp";
        image.forEach((image) => {
          image.classList.remove("blur");
        });
        observer.unobserve(entry.target);
      }
    }),
      {
        root: null,
        threshold: 0,
        rootMargin: "-30px",
      };
  });
  renewObserver.observe(document.querySelector(".renewableEnergy"));
});

// intesecting observer sticky
