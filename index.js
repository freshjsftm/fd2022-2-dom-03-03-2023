"use strict";

const DEFAULT_DIR = "next";

const db = [
  {
    src: "https://media-cdn.tripadvisor.com/media/photo-s/0d/df/c1/45/house-of-sea-and-sun.jpg",
    alt: "sunset",
  },
  {
    src: "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    alt: "sea",
  },
  {
    src: "https://images.nature.com/original/magazine-assets/d41586-022-02899-y/d41586-022-02899-y_23462194.jpg",
    alt: "sea wale",
  },
  {
    src: "https://www.royalcaribbean.com/blog/wp-content/uploads/2021/06/iStock-1170804921-1650x1100.jpg",
    alt: "sea 2",
  },
];

const slider = new Slider(db);
const image = document.querySelector(".slide>img");

function updateView() {
  //image.src = slider.currentSlide;
  //console.log(slider.currentSlide)
  image.setAttribute("src", slider.currentSlide.src);
  image.setAttribute("alt", slider.currentSlide.alt);
  image.setAttribute("title", slider.currentSlide.alt);
}
updateView();

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);

const handlerBtnSlider =
  (direction = DEFAULT_DIR) =>
  () => {
    slider.currentIndex =
      slider[direction === DEFAULT_DIR ? "nextIndex" : "prevIndex"];
    updateView();
  };

prevBtn.addEventListener("click", handlerBtnSlider("prev"));
nextBtn.addEventListener("click", handlerBtnSlider("next"));

const uniq = document.getElementById("uniq");

uniq.addEventListener("click", handlerBtnUniq);
uniq.addEventListener("click", logValue);
uniq.addEventListener("click", showBtn);
uniq.addEventListener('click', ()=>alert(111), {once:true})
// uniq.removeEventListener("click", handlerBtnUniq);

function handlerBtnUniq() {
  console.log("handlerBtnUniq");
  uniq.removeEventListener("click", handlerBtnUniq);
}
function logValue() {
  console.log("logValue");
  uniq.removeEventListener('click', showBtn);
}
function showBtn() {
  console.log("showBtn");
}
