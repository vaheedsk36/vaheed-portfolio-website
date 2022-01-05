"use strict";
const bodyColor = document.querySelector(".about");
const spanColor = document.querySelector("#spancol");
const workColor = document.querySelector("#work");

const modal = document.querySelector(".modal-window");
const closeButton = document.querySelector(".close-btn");
const contactButton = document.querySelector(".contact-btn");

let i = 0;

const bgColorChanger = () => {
  const colorCodes = ["top", "left", "bottom", "right"];
  bodyColor.style.background = `linear-gradient(to ${colorCodes[i]}, #43cea2, #185a9d)`;
  const colorCodes2 = ["#43cea2", "#0dc58b", "#0dac7a"];
  spanColor.style.color = colorCodes2[i];
  workColor.style.color = colorCodes2[i];
  i = (i + 1) % colorCodes.length;
};

setInterval(bgColorChanger, 1500);

window.onscroll = function () {
  myFunction();
};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

contactButton.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

closeButton.addEventListener("click", function () {
  modal.classList.add("hidden");
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

//Background color changing animation refactored


// const c1 = "linear-gradient(to top, #43cea2, #185a9d)";
// const c2 = "linear-gradient(to left, #43cea2, #185a9d)";
// const c3 = "linear-gradient(to bottom, #43cea2, #185a9d)";
// const c4 = "linear-gradient(to right, #43cea2, #185a9d)";
// //Background color changing animation
// let i = 0;
// const bgColorChanger = ()=>{
//     const colorCodes = [c1,c2,c3,c4];
//     // console.log(colorCodes[i]);
//     bodyColor.style.background = colorCodes[i];
//     i = (i+1)%colorCodes.length;
// }

// setInterval(bgColorChanger,2000);
