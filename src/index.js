console.log("Setup working as expected");
import "./style.css";

function base() {
  const element = document.createElement("div");
  element.classList.add("grid-container");

  const header = document.createElement("div");
  header.classList.add("item1");
  element.append(header);
  header.innerHTML = "header";

  const menu = document.createElement("div");
  menu.classList.add("item2");
  element.append(menu);
  menu.innerHTML = "menu";

  const main = document.createElement("div");
  main.classList.add("item3");
  element.append(main);
  main.innerHTML = "main";

  const right = document.createElement("div");
  right.classList.add("item4");
  element.append(right);
  right.innerHTML = "right";

  const footer = document.createElement("div");
  footer.classList.add("item5");
  element.append(footer);
  footer.innerHTML = "footer";

  return element;
}
document.body.appendChild(base());
