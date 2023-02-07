"use strict";

const handlerBtn = ({
  target: {
    parentElement: parent,
    dataset: { bgColor },
  },
}) => {
  parent.style.backgroundColor = bgColor;
};

const btns = document.querySelectorAll("#wrapper>button");

for (const btn of btns) {
  btn.addEventListener("click", handlerBtn);
}
