const navBar = document.querySelector(".nav-bar");
const navLinks = document.querySelectorAll(".nav-bar ul li a");
const sections = document.querySelectorAll("section");

//show nav on scrolling down
const showNav = () => {
  if (
    document.body.scrollTop >= 200 ||
    document.documentElement.scrollTop >= 200
  ) {
    navBar.classList.add("colored");
  } else {
    navBar.classList.remove("colored");
  }
};

//
//
//
//smooth scrolling
const smoothScrolling = (e) => {
  e.preventDefault();
  if (e.target.classList.contains("nav-link")) {
    const href = e.target.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }
};

//
//
//
//change nav bar text color
function changeNavColor(sectionID, color) {
  navLinks.forEach((link) => {
    if (link.hash === `#${sectionID}`) {
      link.style.color = color;
    }
  });
}

// find which section is in viewport
// const findSection = () => {
//   sections.forEach((section) => {
//     if (
//       window.scrollY >= section.offsetTop &&
//       window.scrollY <= section.scrollHeight + section.offsetTop
//     ) {
//       changeNavColor(section.id, "#318fb5");
//     } else {
//       changeNavColor(section.id, "#fff");
//     }
//   });
// };

const findSection = () => {
  sections.forEach((section) => {
    if (
      section.getBoundingClientRect().top <= window.innerHeight * 0.2 &&
      window.scrollY <= section.scrollHeight + section.offsetTop * 0.9
    ) {
      changeNavColor(section.id, "#318fb5");
    } else {
      changeNavColor(section.id, "#fff");
    }
  });
};

//
//
//EventListeners
navBar.addEventListener("click", smoothScrolling);
window.addEventListener("scroll", findSection);
window.addEventListener("scroll", showNav);
