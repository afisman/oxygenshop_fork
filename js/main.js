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
    const pos = document.documentElement.scrollTop;
    const calcHeight = document.documentElement.clientHeight;
    const scrollValue = Math.round(pos*27.4 / calcHeight)
    progressBar.style.background = `linear-gradient(to right,#58bbde ${scrollValue}%, #FFF 0%)`
}

//BackToTop Function
const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
}

btn_back.addEventListener("click", scrollToTop);


window.onscroll = scrollPercentage;


