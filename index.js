"use strict";

const cardsContainer = document.getElementById("cardsContainer");
const cardsHTML = actors
  .filter((actor) => actor.name && actor.photo && actor.birthdate)
  .map((actor) => createActorCard(actor));

function createActorCard(actor) {
  const actorCardHTML = document.createElement("li");
  actorCardHTML.classList.add("cardWrapper");

  const article = document.createElement("article");
  article.classList.add("card");

  const divWrapper = document.createElement("div");
  divWrapper.classList.add("cardImageWrapper");

  const divInitial = document.createElement("div");
  divInitial.classList.add("initials");
  divInitial.textContent = actor.name[0];
  divInitial.style.backgroundColor = stringToColour(actor.name);

  const img = document.createElement("img");
  img.classList.add("cardImage");
  img.setAttribute("src", actor.photo);
  img.setAttribute("alt", actor.name);
  img.setAttribute("hidden", true);
  img.addEventListener("error", handleImageError);
  img.addEventListener("load", handleImageLoad);

  divWrapper.append(divInitial, img);

  const h2 = document.createElement("h2");
  h2.classList.add("cardName", "oneLine");
  h2.textContent = actor.name;

  const p = document.createElement("p");
  p.classList.add("cardDescription", "oneLine");
  p.textContent = actor.birthdate;

  article.append(divWrapper, h2, p);
  actorCardHTML.append(article);
  return actorCardHTML;
}

cardsContainer.append(...cardsHTML);

/// handlers

function handleImageError({ target }) {
  target.remove();
}
function handleImageLoad({ target }) {
  target.removeAttribute("hidden");
}

function stringToColour(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substring(2);
  }
  if (colour.length === 6) {
    colour += "0";
  }
  return colour;
}
