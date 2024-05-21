"use strict";

let container = document.querySelector(".contactPage");
let container2 = document.querySelector(".but");

const btnLink = document.createElement("a");
const btn2 = document.createElement("button");
btn2.innerHTML = `<i class="ri-close-line"></i>`;
btn2.id = "btn2";
btnLink.appendChild(btn2);
btnLink.href = "./index.html";
container2.appendChild(btnLink);

const nameInputsdiv = document.createElement("div");
const nameInputsdiv2nd = document.createElement("div");
nameInputsdiv.classList.add("names");
nameInputsdiv2nd.classList.add("names");

const Inputsdiv = document.createElement("div");
Inputsdiv.classList.add("inputsDiv2");

const para = document.createElement("p");
para.innerText = "24/7 We will answer your questions and problems";
container.appendChild(para);

const form = document.createElement("form");;
form.action="https://formspree.io/f/mwkgznqn";
form.method="POST";
form.classList.add("form");
for (let i = 0; i < 5; i++) {
    const inputElement = document.createElement("input");
    inputElement.required = true; 

    if (i == 0) {
        inputElement.placeholder = "First Name";
        inputElement.type = "text";
        nameInputsdiv.appendChild(inputElement);
    } else if (i == 1) {
        inputElement.placeholder = "Last Name";
        inputElement.type = "text";
        nameInputsdiv.appendChild(inputElement);
    } else if (i == 2) {
        inputElement.placeholder = "Email";
        inputElement.type = "email";
        inputElement.name = "email";
        inputElement.pattern = "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}";
        inputElement.id = "email";
        nameInputsdiv2nd.appendChild(inputElement);
    } else if (i == 3) {
        inputElement.placeholder = "Phone";
        inputElement.name = "phone";
        inputElement.type = "tel";
        nameInputsdiv2nd.appendChild(inputElement);
    } else if (i == 4) {
        const textarea1 = document.createElement("textarea"); // Create the textarea element
        textarea1.placeholder = "Describe your issue";
        textarea1.name = "message"; // Set the name attribute for the textarea
        textarea1.id = "describe";
        textarea1.required = true; // Ensure textarea is required
        Inputsdiv.appendChild(textarea1); // Append the textarea to Inputsdiv
    }
}

form.appendChild(nameInputsdiv);
form.appendChild(nameInputsdiv2nd);
form.appendChild(Inputsdiv);
container.appendChild(form);

const btn = document.createElement("button");
btn.innerText = "Send";
btn.type = "submit";
btn.id = "btn";
form.appendChild(btn);
