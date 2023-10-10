//constants
const recipeForm = document.querySelector("#recipe-form");

const recipesList = document.querySelector("#recipes-list");

const recipeInput = document.querySelector("#recipe-input");

//prevent from refreshing
recipeForm.addEventListener("submit", function onClick(event) {
  event.preventDefault();

  //add to recipes list
  const newLi = document.createElement("li");
  recipesList.appendChild(newLi);
  newLi.innerText = recipeInput.value;

  recipeInput.value = "";
});
