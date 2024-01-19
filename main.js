// const body = document.querySelector(".body");
// const primaryParent = document.querySelector(".primary-parent");
// const hamburgerButton = document.querySelector(".hamburger");
// const primaryNav = document.querySelector(".primary-navbar");
// const mobileNav = document.querySelector(".mobile-nav");

// // Initialize a variable to keep track of the navbar's state
// let isNavbarVisible = false;

// // Function to toggle the navbar
// function toggleNavbar() {
//   if (isNavbarVisible) {
//     mobileNav.classList.remove("is-active");
//     hamburgerButton.classList.remove("is-active");
//     body.classList.remove("is-active");
//     isNavbarVisible = false;
//   } else {
//     primaryNav.toggleAttribute("is-active");
//     mobileNav.classList.add("is-active");
//     hamburgerButton.classList.add("is-active");
//     body.classList.add("is-active");
//     isNavbarVisible = true;
//   }
// }

const navbarChild = document.querySelector(".navbarMobile");
const hamburgerButton = document.querySelector(".hamburgerButton");
const hamburgerButtonClose = document.querySelector(".hamburgerButtonClose");
const body = document.querySelector(".body");

hamburgerButton.addEventListener("click", openNav);
hamburgerButtonClose.addEventListener("click", closeNav);

let isNavbarVisible = false;

function openNav() {
  if (isNavbarVisible) {
    navbarChild.classList.remove("active");
    hamburgerButton.classList.remove("hamrem");
    hamburgerButtonClose.classList.remove("hamadd");
    body.classList.remove("bodyActive");
    isNavbarVisible = false;
  } else {
    navbarChild.classList.add("active");
    hamburgerButton.classList.add("hamrem");
    hamburgerButtonClose.classList.add("hamadd");
    body.classList.add("bodyActive");
    isNavbarVisible = true;
  }
}

function closeNav() {
  if (isNavbarVisible) {
    navbarChild.classList.remove("active");
    hamburgerButton.classList.remove("hamrem");
    hamburgerButtonClose.classList.remove("hamadd");
    body.classList.remove("bodyActive");
    isNavbarVisible = false;
  } else {
    navbarChild.classList.add("active");
    hamburgerButton.classList.add("hamrem");
    hamburgerButtonClose.classList.add("hamadd");
    body.classList.add("bodyActive");
    isNavbarVisible = true;
  }
}
