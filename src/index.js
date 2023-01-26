import "./style.css";
import { todoFunctions } from "./todoFunctions.js";
import { domFunctions } from "./domFunctions.js";
import { storageFunctions } from "./storageFunctions";

const storageHandler = storageFunctions();
const listHandler = todoFunctions(storageHandler.retreiveStorage());
const domHandler = domFunctions();
//storageHandler.populateStorage();
domHandler.buildBase();
let currentView = "everythingView";
domHandler.renderTodoList(listHandler.getList(currentView));
refreshListeners();
//TODO add a pub/sub module which will allow the domFunctions and todofunctions to interact through a mediator
//TODO add  a module for projects
//TODO refactor the tasks so that they are included as part of projects
//TODO make the nav filters filter through the projects to only show todo's with the correct properties e.g. date

function refreshListeners() {
  let todoChecks = [...document.getElementsByClassName("todo-check")];
  todoChecks.forEach((element) => {
    element.addEventListener("click", function funct() {
      listHandler.toggleArchiveStatus(element.parentElement.dataset.index),
        domHandler.renderTodoList(listHandler.getList(currentView));
      storageHandler.populateStorage(listHandler.getList());
      refreshListeners();
    });
  });
  let todoPriority = [...document.getElementsByClassName("todo-priority")];
  todoPriority.forEach((element) => {
    element.addEventListener("click", function funct() {
      listHandler.togglePriority(element.parentElement.dataset.index),
        domHandler.renderTodoList(listHandler.getList(currentView));
      storageHandler.populateStorage(listHandler.getList());
      refreshListeners();
    });
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
      newDescription.value,
      newDue.value,
      getPrioritySelected(),
      "",
      false
    );
    domHandler.renderTodoList(listHandler.getList(currentView));
    domHandler.closeModal();
    console.log(listHandler.getList());
    storageHandler.populateStorage(listHandler.getList());
    refreshListeners();
  };
}
function navListeners() {
  let navFilter = document.querySelectorAll(".nav-filter");
  navFilter.forEach((element) => {
    element.addEventListener("click", function funct() {
      let pageTitle = document.getElementById("page-title");
      pageTitle.textContent = element.querySelector(".nf-label").textContent;
      domHandler.changeView(element);
      currentView = element.id;
      console.log("current view: " + currentView);
      domHandler.renderTodoList(listHandler.getList(currentView));
      refreshListeners();
    });
  });
}
navListeners();

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
