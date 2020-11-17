const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector(".menu");

const ul = document.querySelector(".menu-nav");

const listItems = document.querySelectorAll(".nav-item");

// Set the initial state of the menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    nav.classList.add("show");
    ul.classList.add("show");
    listItems.forEach((item) => item.classList.add("show"));

    // Reset the menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    nav.classList.remove("show");
    ul.classList.remove("show");
    listItems.forEach((item) => item.classList.remove("show"));

    // Reset the menu state
    showMenu = false;
  }
}
