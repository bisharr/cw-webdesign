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
    sunEL.src = "img/moon.png";
  } else {
    sunEL.src = "img/sun.png";
    heroImgEl.src = "img/hero.jpg";
  }
});

const languageEl = document.querySelector(".language");
const stEL = document.querySelector(".students");
console.log(stEL);
console.log(languageEl);

languageEl.addEventListener("change", function (e) {
  if (e.target.value === "somali") {
    console.log("somali");
    stEL.textContent =
      "waxaan nahay ardayda Vu kuwaas oo hormariya softweeradii udanbeeyay";
  } else {
    stEL.textContent = "  We are Vu Students and we're Software engineers";
  }
});
