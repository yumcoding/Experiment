const container = document.querySelector(".container");

const showPanel = (e) => {
  if (e.target.classList.contains("accordion-btn")) {
    e.target.classList.toggle("active");

    const panel = e.target.nextElementSibling;
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }

    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
};

container.addEventListener("click", showPanel);
