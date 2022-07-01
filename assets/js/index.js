const btns = document.querySelectorAll(".btns button");
const boxItems = document.querySelector(".direction-items");
const items = document.querySelectorAll(".direction-item");

for (const btn of btns) {
  btn.addEventListener("mouseover", btnHandler);
}

function btnHandler({ target }) {
  for (const btn of btns) {
    btn.classList.remove("add-color-btn");
  }

  target.classList.add("add-color-btn");

  boxItems.style.flexDirection = target.dataset.direction;
}
