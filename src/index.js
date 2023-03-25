import "./style.css";
import { todoFunctions } from "./todoFunctions.js";
import { domFunctions } from "./domFunctions.js";
import { storageFunctions } from "./storageFunctions";
import { projects } from "./projects";
import { format, parseISO } from "date-fns";

const storageHandler = storageFunctions();
const projectHandler = projects(storageHandler.retreiveStorage("isAProject"));
console.log(projectHandler.listProjects() + " projects");
let xy = [projectHandler.listProjects()];
console.log(xy);
storageHandler.populateStorage(projectHandler.listProjects(), "isAProject");
const listHandler = todoFunctions(storageHandler.retreiveStorage());
const domHandler = domFunctions();
//storageHandler.populateStorage();
domHandler.buildBase(projectHandler.listProjects());
let currentView = "everythingView";
let currentProject = "Default";
let aProject = document.getElementById("Default");
aProject.classList.add("activeProject");
domHandler.renderTodoList(listHandler.getList(currentView, currentProject));
refreshListeners();
//TODO add  a module for projects
//TODO refactor the tasks so that they are included as part of projects

function refreshListeners() {
  let todoChecks = [...document.getElementsByClassName("todo-check")];
  todoChecks.forEach((element) => {
    element.addEventListener("click", function funct() {
      listHandler.toggleArchiveStatus(element.parentElement.dataset.index);
      domHandler.renderTodoList(
        listHandler.getList(currentView, currentProject)
      );
      storageHandler.populateStorage(listHandler.getList());
      refreshListeners();
    });
  });
  let todoPriority = [...document.getElementsByClassName("todo-priority")];
  todoPriority.forEach((element) => {
    element.addEventListener("click", function funct() {
      listHandler.togglePriority(element.parentElement.dataset.index);
      domHandler.renderTodoList(
        listHandler.getList(currentView, currentProject)
      );
      storageHandler.populateStorage(listHandler.getList());
      refreshListeners();
    });
  });
  let addTodo = document.querySelector("#add-todo");
  addTodo.addEventListener("click", (e) => domHandler.openModal());
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
  let newProject = document.querySelector(".activeProject");
  console.log(newProject.id);
  newSubmit.onclick = function () {
    /* create the new todo */
    listHandler.newTodo(
      newTitle.value,
      newDescription.value,
      newDue.value,
      getPrioritySelected(),
      newProject.id,
      false
    );
    /* reset the modal values */
    newTitle.value = "";
    newDescription.value = "";
    newDue.value = null;

    // redraw and save the todolist
    domHandler.renderTodoList(listHandler.getList(currentView, currentProject));
    domHandler.closeModal();
    console.log(listHandler.getList());
    storageHandler.populateStorage(listHandler.getList());
    refreshListeners();
  };
  let todoDelete = [...document.getElementsByClassName("todo-delete")];
  todoDelete.forEach((element) => {
    element.addEventListener("click", function funct() {
      listHandler.todoDelete(element.parentElement.parentElement.dataset.index);
      domHandler.renderTodoList(listHandler.getList(currentView));
      storageHandler.populateStorage(listHandler.getList());
      refreshListeners();
    });
  });
  let todoEdit = [...document.getElementsByClassName("todo-edit")];
  todoEdit.forEach((element) => {
    element.addEventListener("click", function funct() {
      //get all the details
      let todoIndex = listHandler.getIndex(
        element.parentElement.parentElement.dataset.index
      );
      let item = listHandler.getList()[todoIndex].getAllDetails();
      //open to modal with details loaded
      domHandler.openEditModal(item);
      // this is for saving the details
      let editTitle = document.querySelector("#edit-title");
      let editDescription = document.querySelector("#edit-description");
      let editDue = document.querySelector("#edit-due");
      let saveEdit = document.getElementById("edit-save");
      saveEdit.onclick = function () {
        listHandler.todoEdit(
          item.uid,
          editTitle.value,
          editDescription.value,
          editDue.value,
          item.todoPriority,
          ""
        );
        storageHandler.populateStorage(listHandler.getList());
        domHandler.renderTodoList(
          listHandler.getList(currentView, currentProject)
        );
        domHandler.closeEditModal();
        refreshListeners();
      };
    });
  });
  let addProject = document.querySelector("#add-new-project");
  domHandler.newProjectModal();
  addProject.addEventListener("click", (e) => domHandler.showNewProjectModal());
  let saveNewProject = document.getElementById("new-project-save");
  console.log(saveNewProject);
  saveNewProject.onclick = function () {
    let newProjectName = document.querySelector("#newProject");
    projectHandler.newProject(newProjectName.value);
    console.log(projectHandler.listProjects());
    domHandler.closeNewProjectModal();
    domHandler.buildBase(projectHandler.listProjects());
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
      domHandler.renderTodoList(
        listHandler.getList(currentView, currentProject)
      );
      refreshListeners();
    });
  });
}
navListeners();
function projectListeners() {
  let navProject = document.querySelectorAll(".nav-project");
  navProject.forEach((element) => {
    element.addEventListener("click", function funct() {
      domHandler.changeProject(element);
      currentProject = element.id;
      console.log("current project: " + currentProject);
      domHandler.renderTodoList(
        listHandler.getList(currentView, currentProject)
      );
      refreshListeners();
    });
  });
}
projectListeners();
