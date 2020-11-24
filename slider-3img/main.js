const prev = document.querySelector(".gallery-prev");
const next = document.querySelector(".gallery-next");
const stream = document.querySelector(".gallery-stream");

let items = document.querySelectorAll(".gallery-item");

const showPrev = () => {
  stream.insertBefore(items[items.length - 1], items[0]);
  items = document.querySelectorAll(".gallery-item");
};

const showNext = () => {
  stream.appendChild(items[0]);
  items = document.querySelectorAll(".gallery-item");
};

prev.addEventListener("click", showPrev);
next.addEventListener("click", showNext);
