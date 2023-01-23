import "./style.css";
import { todoFunctions } from "./todoFunctions.js";
import { domFunctions } from "./domFunctions.js";

const domHandler = domFunctions();

function retreiveStorage() {
  let loadedList = JSON.parse(window.localStorage.getItem("list"));
  //console.log(newobjectslist[3].todoTitle);
  if (loadedList != null) {
    console.log("List retreived from storage. Length: " + loadedList.length);
    return loadedList;
  }
}
const listHandler = todoFunctions(retreiveStorage());
domHandler.buildBase();
domHandler.renderTodoList(listHandler.getList());
refreshListeners();
//TODO add a pub/sub module which will allow the domFunctions and todofunctions to interact through a mediator
//TODO add  a module for projects
//TODO Everything clickable should be a button
//TODO implement localstorage to save and retreive the todo items
//TODO refactor the tasks so that they are included as part of projects
//TODO make the nav filters filter through the projects to only show todo's with the correct properties e.g. date
function populateStorage() {
  let x = [];
  for (let index = 0; index < listHandler.getList().length; index++) {
    x.push(listHandler.getList()[index].getAllDetails());
  }
  localStorage.setItem("list", JSON.stringify(x));
  console.log("saved to storage");
}

function refreshListeners() {
  let todoChecks = [...document.getElementsByClassName("todo-check")];
  todoChecks.forEach((element) => {
    element.addEventListener("click", (e) =>
      listHandler.toggleArchiveStatus(element.parentElement.dataset.index)
    );
  });
  let addTodo = document.querySelector("#add-todo");
  addTodo.addEventListener("click", (e) => domHandler.openModal());
  //TODO this is maybe not the way to submit the form correctly. need to rework this.
  let newSubmit = document.querySelector("#new-submit");
  let newTitle = document.querySelector("#new-title");
  let newDescription = document.querySelector("#new-description");
  let newDue = document.querySelector("#new-due");
  function getPrioritySelected() {
    var checkRadio = document.querySelector(
      'input[name="new-priority"]:checked'
    );
    if (checkRadio != null) {
      return checkRadio.id;
    } else {
      return "No one selected";
    }
  }

  newSubmit.onclick = function () {
    listHandler.newTodo(
      newTitle.value,
      newDescription,
      newDue.value,
      getPrioritySelected(),
      "",
      false
    );
    domHandler.renderTodoList(listHandler.getList());
    domHandler.closeModal();
    populateStorage();
    refreshListeners();
  };
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
//console.log("Session storage available: " + storageAvailable("sessionStorage"));
//console.log("Local storage available: " + storageAvailable("localStorage"));

//some example todos
