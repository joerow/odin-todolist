console.log("Setup working as expected");
import "./style.css";

function base() {
  const element = document.createElement("div");
  element.classList.add("content");

  const topBar = document.createElement("div");
  topBar.classList.add("topBar");
  element.append(topBar);
  topBar.innerHTML = "this is the top bar";

  return element;
}
document.body.appendChild(base());
