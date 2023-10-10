const taskInput = document.querySelector("#task-input");

const taskForm = document.querySelector("#task-form");

const taskList = document.querySelector("#task-list");

const clearButton = document.querySelector("#clear-button");

//add to list
taskForm.addEventListener("submit", function onClick(event) {
  //this prevents the page from refreshing
  event.preventDefault();

  //make the task go to the list
  const newLi = document.createElement("li");
  //add to list
  taskList.appendChild(newLi);
  newLi.innerText = taskInput.value;

  //taking off individual task
  const newButton = document.createElement("button");
  newButton.innerText = "X";
  newLi.appendChild(newButton);

  //clear individual working
  newButton.addEventListener("click", function onClick(e) {
    taskList.removeChild(newLi);
  });

  //clear bar
  taskInput.value = "";
});

//clear list
clearButton.addEventListener("click", function onClick(e) {
  taskList.innerHTML = "";
});
