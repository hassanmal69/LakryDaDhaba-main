"use strict";
let container = document.querySelector(".contactPage");
let container2 = document.querySelector(".but");
const btnLink=document.createElement("a")
const btn2= document.createElement("button");
btn2.innerHTML=`<i class="ri-close-line"></i>`;
btn2.id = "btn2";
btnLink.appendChild(btn2);
btnLink.href = "./index.html";
container2.appendChild(btnLink);
const nameInputsdiv = document.createElement("div");
const nameInputsdiv2nd=document.createElement("div");
nameInputsdiv.classList.add("names");
nameInputsdiv2nd.classList.add("names");
const Inputsdiv = document.createElement("div");
Inputsdiv.classList.add("inputsDiv2");
const para = document.createElement("p");
para.innerText = "24/7 We will answer your questions and problems";
container.appendChild(para);
for (let i = 0; i < 5; i++) {
  const inputElement = document.createElement("input");
  
  if (i == 0) {
    inputElement.placeholder = "First Name";
    nameInputsdiv.appendChild(inputElement);
  }
  if (i == 1) {
    inputElement.placeholder = "Last Name";
    nameInputsdiv.appendChild(inputElement);
  }
  if (i == 2) {
    inputElement.placeholder = "Email";
    inputElement.type = "email";
    nameInputsdiv2nd.appendChild(inputElement);
    inputElement.id = "email";
  }
  if (i == 3) {
    inputElement.placeholder = "Phone";
    nameInputsdiv2nd.appendChild(inputElement);
  }
  if (i == 4) {
    const textarea1 = document.createElement("textarea");
    textarea1.placeholder = "Describe your issue";
    inputElement.type = "textarea";
    textarea1.appendChild(inputElement);
    Inputsdiv.appendChild(textarea1);
    textarea1.id = "describe";
  }
  container.appendChild(nameInputsdiv);
  container.appendChild(nameInputsdiv2nd);
  container.appendChild(Inputsdiv);
}
const btn = document.createElement("button");
btn.innerText = "Send";
btn.id = "btn";
container.appendChild(btn);
