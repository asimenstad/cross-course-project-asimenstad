const hamburger = document.querySelector(".hamburger");
const showMenu = document.querySelector(".show-menu");
const exitMenu = document.querySelector(".exit-menu");
const menu = document.querySelector(".nav-lower");
const dropdown = document.querySelector(".dropdown-jackets");

exitMenu.style.display = "none";

function toggleMenu() {
  menu.classList.toggle("open");
  if (menu.classList.contains("open")) {
    showMenu.style.display = "none";
    exitMenu.style.display = "block";
  } else {
    showMenu.style.display = "block";
    exitMenu.style.display = "none";
  }
}

hamburger.addEventListener("click", toggleMenu);
