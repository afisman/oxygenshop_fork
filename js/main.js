import { useScrollPercentage } from "./scrollPercentage.js"
import { getCurrency } from "./currency.js"

const list = document.getElementById("list")
const open = document.getElementById("open")
const close = document.getElementById("close")
const progressBar = document.getElementById("progressBar")
const btn_back = document.getElementById("btn_back")

open.addEventListener("click", () => {
    list.classList.add("nav__list--active")
    open.classList.add("btn__menu--click")
    close.classList.remove("btn__close--click")
})

close.addEventListener("click", () => {
    list.classList.remove("nav__list--active")
    open.classList.remove("btn__menu--click")
    close.classList.add("btn__close--click")
})

//ProgressBar Function
const scrollPercentage = () => {
    progressBar.style.background = `linear-gradient(to right,#58bbde ${useScrollPercentage()}%, #FFF 0%)`
}

//Timeout function
const sleep = (ms) =>  {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//BackToTop Function
const scrollToTop = async () => {
    await sleep(200);
    window.scrollTo({top: 0, behavior: 'smooth'})
}
btn_back.addEventListener("click", scrollToTop);


//Scroll Viewport
window.addEventListener('scroll', scrollPercentage);


//Currency format
getCurrency()