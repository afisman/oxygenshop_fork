let slideIndex = 0;
let slides = document.querySelectorAll(".image-slider");
let dots = document.querySelectorAll(".dot-slider");
let btn_left = document.getElementById("btn_left");
let btn_right = document.getElementById("btn_right");

let timeout = null;

function removeStyles() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    dots[i].style.backgroundColor = "#bbb";
  }
}

function autoSlide() {
  removeStyles();
  if (slideIndex != slides.length - 1) {
    slideIndex = slideIndex + 1;
  } else {
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].style.backgroundColor = "#FFF";
  timeout = setTimeout(autoSlide, 4000);
}

function moveSlide(e) {
  clearTimeout(timeout);
  removeStyles();
  if (e.target.value == "left") {
    if (slideIndex != 0) {
      slideIndex = slideIndex - 1;
    } else {
      slideIndex = slides.length - 1;
    }
  }
  if (e.target.value == "right") {
    if (slideIndex != slides.length - 1) {
      slideIndex = slideIndex + 1;
    } else {
      slideIndex = 0;
    }
  }
  slides[slideIndex].style.display = "block";
  dots[slideIndex].style.backgroundColor = "#FFF";
  console.log(slideIndex);
  timeout = setTimeout(autoSlide, 4000)
}

btn_left.addEventListener("click", moveSlide);
btn_right.addEventListener("click", moveSlide);

window.onload = autoSlide();
