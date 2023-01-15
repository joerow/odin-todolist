import "./style.css";
import { todoFunctions } from "./todoFunctions.js";
import { domFunctions } from "./domFunctions.js";

const domHandler = domFunctions();
const listHandler = todoFunctions();
domHandler.buildBase();
domHandler.renderTodoList(listHandler.getList());
refreshListeners();
//TODO add a pub/sub module which will allow the domFunctions and todofunctions to interact through a mediator
//TODO add  a module for projects
//TODO Everything clickable should be a button
//TODO implement localstorage to save and retreive the todo items
//TODO refactor the tasks so that they are included as part of projects
//TODO make the nav filters filter through the projects to only show todo's with the correct properties e.g. date

function refreshListeners() {
  let todoChecks = [...document.getElementsByClassName("todo-check")];
  console.log(todoChecks);
  todoChecks.forEach((element) => {
    element.addEventListener("click", (e) =>
      listHandler.toggleArchiveStatus(element.parentElement.dataset.index)
    );
  });
  let addTodo = document.querySelector("#add-todo");
  addTodo.addEventListener("click", (e) => domHandler.openModal());
}

//local storage functions from mdn web docs https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}
console.log("Session storage available: " + storageAvailable("sessionStorage"));
console.log("Local storage available: " + storageAvailable("localStorage"));

//some example todos
