const list = document.querySelector("#list")
const open = document.querySelector("#open")
const close = document.querySelector("#close")

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