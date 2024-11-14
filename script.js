const sunEL = document.querySelector(".sun");
const heroImgEl = document.querySelector(".hero-img_tag");
const timeEL = document.querySelector(".timeformat");
const dateEl = document.querySelector(".datefotmat");

const date = new Date();
let fullYear = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
let monthformat = `${month < 9 ? `0${month + 1}` : month + 1}`;
let dayformat = `${day < 9 ? `0${day}` : day}`;
dateEl.textContent = `${monthformat}/${dayformat}/${fullYear}`;

function interVals() {
  setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let hourformat = `${hour < 9 ? `0${hour}` : hour}`;
    let minuteformat = `${minutes < 9 ? `0${minutes}` : minutes}`;
    let secondformat = `${seconds < 9 ? `0${seconds}` : seconds}`;

    timeEL.textContent = `${hourformat}:${minuteformat}:${secondformat}`;
  }, 1000);
}

function DateFun() {
  interVals();
}
DateFun();
sunEL.addEventListener("click", function () {
  document.body.classList.toggle("darkTheme");
  if (document.body.classList.contains("darkTheme")) {
    sunEL.src = "img/moon.png";
  } else {
    sunEL.src = "img/sun.png";
    heroImgEl.src = "img/hero.jpg";
  }
});
