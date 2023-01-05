import "./style.css";
import { myProjects } from "./lists.js";
function header() {
  const header = document.createElement("div");
  header.classList.add("item1");
  header.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  header.innerHTML +=
    '<span class="material-symbols-outlined">account_circle</span>';
  return header;
}

function lists() {
  const lists = document.createElement("div");
  lists.classList.add("item2");
  //TODO load lists here
  lists.innerHTML = "Lists not loaded";
  return lists;
}

function base() {
  // create the grid contianer
  const element = document.createElement("div");
  element.classList.add("grid-container");
  element.innerHTML =
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />';

  // create the header
  element.append(header());
  // create the menu
  element.append(lists());

  // create the main area
  const main = document.createElement("div");
  main.classList.add("item3");
  element.append(main);
  main.innerHTML = "List items not loaded";

  // create the right menu
  const right = document.createElement("div");
  right.classList.add("item4");
  element.append(right);
  right.innerHTML = "Item Edit";

  // create the footer
  const footer = document.createElement("div");
  footer.classList.add("item5");
  element.append(footer);
  footer.innerHTML = "footer";

  return element;
}

document.body.appendChild(base());

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
