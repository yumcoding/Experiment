const numElem = document.querySelector("#num");
const playBtn = document.querySelector(".again");
const endNum = +numElem.innerHTML;
let i = 0;

const increaseNum = () => {
  if (i <= endNum) {
    numElem.innerHTML = i;
    i++;
    setTimeout(() => {
      increaseNum();
    }, 10);
  }
};

increaseNum();

playBtn.addEventListener("click", () => {
  i = 0;
  increaseNum();
});
