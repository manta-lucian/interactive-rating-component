const list = document.querySelector(".card__rating").querySelectorAll("li");
const cardFace = document.querySelector(".card");
const cardBack = document.querySelector(".back");
const submitButton = document.querySelector(".card__button");
let selected = document.querySelector(".selection");

let userSelection;

list.forEach((el) => {
  el.addEventListener("click", (e) => {
    list.forEach((btn) => btn.classList.remove("active-rate"));
    e.target.classList.add("active-rate");
    userSelection = e.target.textContent;
  });
});

submitButton.addEventListener("click", (e) => {
  cardFace.classList.add("display-none");
  selected.textContent = `${userSelection}`;
  cardBack.classList.remove("display-none");
});
