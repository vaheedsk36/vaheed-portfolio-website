"use strict";
const bodyColor = document.querySelector(".about");
const spanColor = document.querySelector("#spancol");
const workColor = document.querySelector("#work");

const modal = document.querySelector(".modal-window");
const closeButton = document.querySelector(".close-btn");
const contactButton = document.querySelector(".contact-btn");

let i = 0;

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
