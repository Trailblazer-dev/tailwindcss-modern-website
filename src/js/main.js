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
navLink.forEach((current)=>{current.addEventListener("click", linkAction);})


// testimonials
const userTexts = document.getElementsByClassName('.user-text');
const userPics = document.getElementsByClassName('.user-pic');

function showReview(){
  for(userPic of userPics){
    userPic.classList.remove('active-pic');
  }
  for(userText of userTexts){
    userText.classList.remove('active-text');
  }
  let i = Array.from(userPics).indexOf(event.target);
  userPics[i].classList.add('active-pic')
}