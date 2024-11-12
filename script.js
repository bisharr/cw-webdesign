const sunEL = document.querySelector(".sun");
const heroImgEl = document.querySelector(".hero-img_tag");

sunEL.addEventListener("click", function () {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    sunEL.src = "img/moon.png";
    heroImgEl.src = "members/bashka.jpg";
  } else {
    sunEL.src = "img/sun.png";
    heroImgEl.src = "img/hero.jpg";
  }
});
