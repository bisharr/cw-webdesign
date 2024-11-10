const sunEL = document.querySelector(".sun");

sunEL.addEventListener("click", function () {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    sunEL.src = "img/moon.png";
  }else{
    sunEL.src = "img/sun.png";
  }
});
