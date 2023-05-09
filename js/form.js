const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{2,100}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const fname = document.getElementById('fname')
const email = document.getElementById('email')
const form  = document.getElementById('form')
const container_input = document.querySelectorAll('.container-input')
const checkbox = document.getElementById('checkbox')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if(expressions.name.test(fname.value) && expressions.email.test(email.value) && checkbox.checked === true) {
        container_input.forEach(input => input.classList.remove("incorrect"))
        checkbox.style.border = '1px solid #08a6e4'
        form.reset();
        alert("Successful Registration");
    } if (expressions.name.test(fname.value) === false)  {
        console.log("mal")
        container_input[0].classList.add("incorrect")
        container_input[1].classList.remove("incorrect")
        checkbox.style.border = '1px solid #08a6e4'
        
    } if (expressions.email.test(email.value) === false) {
        container_input[1].classList.add("incorrect")
        container_input[0].classList.remove("incorrect")
        checkbox.style.border = '1px solid #08a6e4'

    } if (checkbox.checked === false) {
        checkbox.style.border = '1px solid #fb3b64'
    } 


})