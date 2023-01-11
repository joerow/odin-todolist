import "./style.css";
import { todo, testfn } from "./lists.js";
import { domFunctions } from "./domFunctions.js";

const domHandler = domFunctions();
domHandler.buildBase();

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
console.log(storageAvailable("sessionStorage"));
console.log(storageAvailable("localStorage"));

//some example todos
let testy = todo(
  "This is a test title",
  "This is a todo description",
  "07/04/2023",
  "High Priority"
);
let testy2 = todo(
  "Here is another todo item",
  "This is a todo description",
  "12/02/2021",
  "Low Priority"
);
let todoList = [];
todoList.push(testy, testy2);
domHandler.renderTodoList(todoList);
let listManager = testfn();
listManager.testfunction();
