const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliderList = document.querySelector(".slider-list");

let items = document.querySelectorAll(".slider-item");

const showPrev = () => {
  sliderList.insertBefore(items[items.length - 1], items[0]);
  items = document.querySelectorAll(".slider-item");
};

const showNext = () => {
  sliderList.appendChild(items[0]);
  items = document.querySelectorAll(".slider-item");
};

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
