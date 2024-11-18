const sunEL = document.querySelector(".sun");
const heroImgEl = document.querySelector(".hero-img_tag");
const timeEL = document.querySelector(".timeformat");
const dateEl = document.querySelector(".datefotmat");

const date = new Date();
let fullYear = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();
console.log(day);
let monthformat = `${month < 10 ? `0${month + 1}` : month + 1}`;
let dayformat = `${day < 10 ? `0${day}` : day}`;
dateEl.textContent = `${monthformat}/${dayformat}/${fullYear}`;

function interVals() {
  setInterval(() => {
    const time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    let hourformat = `${hour < 10 ? `0${hour}` : hour}`;
    let minuteformat = `${minutes < 10 ? `0${minutes}` : minutes}`;
    let secondformat = `${seconds < 10 ? `0${seconds}` : seconds}`;

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
  } else {
    sunEL.src = "img/sun.png";
  }
});
