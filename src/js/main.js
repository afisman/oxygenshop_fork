import { useScrollPercentage } from "./scrollPercentage.js"
import { getCurrency } from "./currency.js"

const list = document.getElementById("list")
const open = document.getElementById("open")
const close = document.getElementById("close")
const progressBar = document.getElementById("progressBar")
const btn_back = document.getElementById("btn_back")
const whyus = document.getElementById("a_whyus")
const benefits = document.getElementById("a_benefits")
const prices = document.getElementById("a_prices")
const contact = document.getElementById("a_contact")
const li_items=document.querySelectorAll(".nav__item")


//Nav Menu
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


//Active Nav
whyus.addEventListener("click", () => {
    li_items.forEach((item) => item.classList.remove("nav__item--first"))
    whyus.classList.add("nav__item--first")
})
benefits.addEventListener("click", () => {
    li_items.forEach((item) => item.classList.remove("nav__item--first"))
    benefits.classList.add("nav__item--first")
})
prices.addEventListener("click", () => {
    li_items.forEach((item) => item.classList.remove("nav__item--first"))
    prices.classList.add("nav__item--first")
})
contact.addEventListener("click", () => {
    li_items.forEach((item) => item.classList.remove("nav__item--first"))
    contact.classList.add("nav__item--first")
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
const  select_currency = document.getElementById("select_currency");
const  price_currency = document.querySelectorAll(".price")
select_currency.addEventListener("change", async function() {
    let price = 0;
    let pricePro = 25
    let pricePre = 60

    if(select_currency.value == "USD") {
        const newCurrency = await getCurrency("USD")
        let newPricePro = pricePro * newCurrency
        let newPricePre = pricePre * newCurrency
        price_currency[0].innerText = "$" + price
        price_currency[1].innerText = "$" + newPricePro
        price_currency[2].innerText = "$" + newPricePre
      
    }
    if(select_currency.value == "EUR"){
        const newCurrency = await getCurrency("EUR")
        let newPricePro = pricePro * newCurrency
        let newPricePre = pricePre * newCurrency
        console.log(newCurrency)
        price_currency[0].innerText = "€" + price
        price_currency[1].innerText = "€" + newPricePro
        price_currency[2].innerText = "€" + newPricePre
    
    } 
    if(select_currency.value == "GBP"){
        const newCurrency =  await getCurrency("GBP")
        let newPricePro = pricePro * newCurrency
        let newPricePre = pricePre * newCurrency
        console.log(newCurrency)
        price_currency[0].innerText = "£" + price
        price_currency[1].innerText = "£" + newPricePro
        price_currency[2].innerText = "£" + newPricePre
       
    }  
});

