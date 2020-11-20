const tab = document.querySelector(".tab");
const btns = document.querySelectorAll(".btn");
const tabContents = document.querySelectorAll(".tab-content");

const openTab = (e) => {
  const btn = e.target;
  const tabId = btn.getAttribute("data-tab");

  tabContents.forEach((tab) => {
    if (tab.classList.contains("active")) {
      tab.classList.remove("active");
    }

    if (tab.id === tabId) {
      tab.classList.add("active");
    }
  });

  btns.forEach((btn) => {
    if (btn.classList.contains("active")) {
      btn.classList.remove("active");
    }
  });

  btn.classList.add("active");
};

tab.addEventListener("click", openTab);
