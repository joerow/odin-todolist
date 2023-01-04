import "./style.css";
import { myLists } from "./lists.js";
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
  myLists.functionThree();
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
