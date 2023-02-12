"use strict";
const logins = [];
const list = document.getElementById("list"); //render
const form = document.getElementById("form");
const login = form.login;
login.focus();
//Brad Pitt
const submitBtn = document.getElementById("submitBtn");
submitBtn.disabled = true;

//Прізвище І.П.

//const patternFullName = /^([A-Z][a-z]+( [A-Z][a-z]+))$/;
//const patternFullName = /^[A-Z][a-z]{2,15} [A-Z][a-z]{2,15}$/;
const patternFullName = /^[А-ЯІЇЄ][а-яіїє]{2,16} ([А-ЯІЇЄ]\.){2}$/;
//blur  change  input  paste copy select cut  keyup  keydown
login.addEventListener("change", (event) => {
  console.log(event.type);
  if (patternFullName.test(login.value.trim())) {
    submitBtn.disabled = false;
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    target,
    target: { login },
  } = event;
  const newLogin = login.value.trim();
  if (patternFullName.test(newLogin) && logins.includes(newLogin) === false) {
    logins.push(newLogin);
    list.append(createLiLogin(newLogin));
  }
  target.reset();
});

function createLiLogin(newLogin) {
  return createElement(
    "li",
    {},
    createElement("span", {}, newLogin),
    createElement(
      "button",
      {
        styles: { color: "red", fontWeight: "bolder" },
        listeners: {
          click: ({ target: { parentElement, previousElementSibling } }) => {
            parentElement.remove();
            logins.splice(logins.indexOf(previousElementSibling.innerText), 1);
          },
        },
      },
      "X"
    )
  );
}
