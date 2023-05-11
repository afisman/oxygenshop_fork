import { postRequest } from "./post.js";

const expressions = {
  name: /^[a-zA-ZÀ-ÿ\s]{2,100}$/,
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

const fname = document.getElementById("fname");
const email = document.getElementById("email");
const form = document.getElementById("form");
const container_input = document.querySelectorAll(".container-input");
const checkbox = document.getElementById("checkbox");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  e.preventDefault();

  if (
    expressions.name.test(fname.value) &&
    expressions.email.test(email.value) &&
    checkbox.checked === true
  ) {
    postRequest(fname.value, email.value)
    container_input.forEach((input) => input.classList.remove("incorrect"));
    checkbox.style.border = "1px solid #08a6e4";
    errorElement.style.visibility = "hidden";
    form.reset();
    alert("Successful Registration");
  } else {
    if (expressions.name.test(fname.value) === false) {
      messages.push("Invalid Name");
      container_input[0].classList.add("incorrect");
      container_input[1].classList.remove("incorrect");
      checkbox.style.border = "1px solid #08a6e4";

    } else if (expressions.email.test(email.value) === false) {
      messages.push("Invalid Email");
      container_input[1].classList.add("incorrect");
      container_input[0].classList.remove("incorrect");
      checkbox.style.border = "1px solid #08a6e4";
    }
    if (checkbox.checked === false) {
      messages.push("You need to accept the terms and private policy");
      checkbox.style.border = "1px solid #fb3b64";
    }
    errorElement.style.visibility = "visible";
    errorElement.innerText = messages.join(", ");
  }
  
});
