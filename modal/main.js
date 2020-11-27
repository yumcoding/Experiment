const body = document.getElementsByTagName("body")[0];
const modalOpenBtn = document.querySelectorAll(".btn");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close");

const openModal = () => {
  modalContainer.style.display = "block";
  body.classList.add("not-scroll");
};

const closeModal = () => {
  modalContainer.style.display = "none";
  body.classList.remove("not-scroll");
};

modalOpenBtn.forEach((btn) => {
  btn.addEventListener("click", openModal);
});

closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  e.target.classList.contains("modal-container")
    ? (modalContainer.style.display = "none")
    : false;
});
