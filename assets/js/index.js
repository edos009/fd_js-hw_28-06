const btns = document.querySelectorAll(".btns button");
const boxItems = document.querySelector(".direction-items");
const items = document.querySelectorAll(".direction-item");

for (const btn of btns) {
  btn.addEventListener("mouseover", btnHandler);
}

function btnHandler({ target }) {
  if (
    target.dataset.direction === "column" ||
    target.dataset.direction === "column-reverse"
  ) {
    getSizeWidth("100%");
  } else {
    getSizeWidth("50px");
  }

  boxItems.style.flexDirection = target.dataset.direction;
}

function getSizeWidth(size) {
  for (const item of items) {
    size === "100%" ? (item.style.width = "100%") : (item.style.width = "50px");
  }
}
