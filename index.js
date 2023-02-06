"use strict";

const db = [
  "https://media-cdn.tripadvisor.com/media/photo-s/0d/df/c1/45/house-of-sea-and-sun.jpg",
  "https://images.unsplash.com/photo-1503756234508-e32369269deb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2VhfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.nature.com/original/magazine-assets/d41586-022-02899-y/d41586-022-02899-y_23462194.jpg",
  "https://www.royalcaribbean.com/blog/wp-content/uploads/2021/06/iStock-1170804921-1650x1100.jpg"
];

const slider = new Slider(db);

const image = document.querySelector(".slide>img");

function updateView(){
  image.src = slider.currentSlide;
}
updateView();

const [prevBtn, nextBtn] = document.querySelectorAll(
  ".slider-container button"
);

prevBtn.addEventListener('click', ()=>{
  slider.currentIndex = slider.prev();
  updateView();
})
nextBtn.addEventListener('click', ()=>{
  slider.currentIndex = slider.next();
  updateView();
})
