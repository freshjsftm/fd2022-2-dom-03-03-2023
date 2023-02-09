"use strict";
const logins = [];
const list = document.getElementById("list"); //render
const form = document.getElementById("form");
const login = form.login;
login.focus();
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const {
    target,
    target: { login },
  } = event;
  const newLogin = login.value.trim();
  if (newLogin && logins.includes(newLogin) === false) {
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
