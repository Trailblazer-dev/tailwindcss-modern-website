// header
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("bg-color-primary-dark");
    header.classList.add("shadow-md");
    header.classList.add("shadow-color-gray");
  } else {
    header.classList.remove("bg-color-primary-dark");
    header.classList.remove("shadow-md");
    header.classList.remove("shadow-color-gray");  
  }
});



// menu
const menuBar = document.getElementById("humburger");
const menu = document.getElementById("menu");
const navLink = document.querySelectorAll(".nav__link");
menuBar.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});

// close menu bar
const close = document.getElementById("close");
close.addEventListener("click", () => {
  menu.classList.add("hidden");
});

function linkAction() {
  menu.classList.add("hidden");
}
navLink.forEach((current) => {
  current.addEventListener("click", linkAction);
});

// testimonials
const userTexts = document.querySelectorAll(".user-text");
const userPics = document.querySelectorAll(".user-pic");

function showReview() {
  for (userPic of userPics) {
    userPic.classList.remove("active-pic");
  }
  for (userText of userTexts) {
    userText.classList.remove("active-text");
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add("active-pic");
  userTexts[i].classList.add("active-text");
}

// flip
const toggleBtn = document.getElementById("toggleBtn");
const card_1_front = document.querySelector("#card_1_front");
const card_1_back = document.querySelector("#card_1_back");

const card_2_front = document.querySelector("#card_2_front");
const card_2_back = document.querySelector("#card_2_back");

const card_3_front = document.querySelector("#card_3_front");
const card_3_back = document.querySelector("#card_3_back");
toggleBtn.addEventListener("change", () => {
  card_1_front.classList.toggle("-rotate-y-180");
  card_1_back.classList.toggle("rotate-y-180");
  card_2_front.classList.toggle("-rotate-y-180");
  card_2_back.classList.toggle("rotate-y-180");
  card_3_front.classList.toggle("-rotate-y-180");
  card_3_back.classList.toggle("rotate-y-180");
});
