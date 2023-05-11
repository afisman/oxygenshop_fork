import { useScrollPercentage } from "./scrollPercentage.js";

const modal = document.getElementById("modal");
const h1_modal = document.getElementById("h1_modal");
const btn_modal = document.getElementById("btn_modal");
const email_modal = document.getElementById("email_modal");
const main = document.getElementsByTagName("main")[0];
const header = document.getElementsByTagName("header")[0];
const nav_item = document.getElementsByClassName("nav__li");
const close_modal = document.getElementById("close_modal");

const showModal = () => {
  modal.style.display = "block";
  main.style.opacity = "0.4";
  header.style.opacity = "0.4";
  document.body.style.overflow = "hidden";
  for (let item of nav_item) {
    item.style.pointerEvents = "none";
  }
};

const closeModal = () => {
  modal.style.display = "none";
  main.style.opacity = "1";
  header.style.opacity = "1";
  document.body.style.overflow = "scroll";
  for (let item of nav_item) {
    item.style.pointerEvents = "auto";
  }
};

const scrollTwentyFive = () => {
  if (!window.localStorage.getItem("modal")) {
    if (useScrollPercentage() === 25) {
      showModal();
      window.localStorage.setItem("modal", showModal);
    }
  }
};

close_modal.addEventListener("click", closeModal);
window.onkeydown = function (event) {
  if (event.keyCode == 27) {
    closeModal();
  }
};

function clickWindow (e) {
    if (window.localStorage.getItem("modal")) {
      console.log(e.target);
      if (
        e.target !== modal &&
        e.target !== h1_modal &&
        e.target !== btn_modal &&
        e.target !== email_modal
      ) {
        closeModal();
        window.removeEventListener("click", clickWindow)
      }
    }
  }

  window.addEventListener("click", clickWindow)

if (!window.localStorage.getItem("modal")) {
  setTimeout(showModal, 5000);
  window.localStorage.setItem("modal", showModal);
}

window.addEventListener("scroll", scrollTwentyFive);
