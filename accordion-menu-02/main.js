const container = document.querySelector(".container");
const titles = document.querySelectorAll(".title");
const icons = document.querySelectorAll(".icon");
const texts = document.querySelectorAll(".text");

const showText = (e) => {
  let elem = e.target;
  while (!elem.classList.contains("title")) {
    elem = elem.parentNode;
    if (elem.nodeName === "BODY") {
      elem = null;
      return;
    }
  }
  const targetText = elem.nextElementSibling;
  const targetIcon = elem.children[0];

  if (targetText.classList.contains("show")) {
    targetText.classList.remove("show");
    targetIcon.classList.remove("anime");
  } else {
    texts.forEach((text) => {
      text.classList.remove("show");
    });

    icons.forEach((icon) => {
      icon.classList.remove("anime");
    });
    targetText.classList.add("show");
    targetIcon.classList.add("anime");
  }
};

container.addEventListener("click", showText);
