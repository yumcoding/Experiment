const filterBtnContainer = document.querySelector(".btn-container");
const filterBtns = document.querySelectorAll(".btn-filter");

const projects = document.querySelectorAll(".project");

const filterElem = (e) => {
  //test if user clicks the space between buttons
  if (e.target.classList.contains("btn-container")) {
    return;
  }

  const targetBtn = e.target;
  const targetData = targetBtn.getAttribute("data-filter");

  // remove active class from unselected btns
  filterBtns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });

  // add active class to selected btn
  targetBtn.classList.add("active");

  //filter selected projects
  projects.forEach((project) => {
    if (project.classList.contains(targetData)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
};

filterBtnContainer.addEventListener("click", filterElem);
