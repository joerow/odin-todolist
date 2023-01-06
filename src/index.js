import "./style.css";
import { myProjects } from "./lists.js";

//create the navbar
function nav() {
  const nav = document.createElement("div");
  nav.classList.add("nav");

  // top section including profile
  const navTop = document.createElement("div");
  navTop.classList.add("nav-top");

  //profile section
  const navProfile = document.createElement("div");
  navProfile.classList.add("nav-profile");
  navTop.append(navProfile);

  //profile icon
  const profileIcon = document.createElement("div");
  profileIcon.classList.add("profile-icon");
  profileIcon.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 48px;">account_circle</span>';
  navProfile.appendChild(profileIcon);

  //profile name
  const profileName = document.createElement("div");
  profileName.classList.add("profile-name");
  profileName.innerHTML = "Profile Name";
  navProfile.appendChild(profileName);

  //shrink nav menu icon
  const shrinkNav = document.createElement("div");
  shrinkNav.classList.add("shrink-nav");
  shrinkNav.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 48px;">chevron_left</span>';
  navTop.appendChild(shrinkNav);
  nav.append(navTop);

  const navSeparator = document.createElement("div");
  navSeparator.classList.add("nav-separator");
  nav.append(navSeparator);

  const navFilters = document.createElement("div");
  navFilters.classList.add("nav-filters");
  navFilters.innerText = "navFilters";
  nav.append(navFilters);

  //TODO load lists here
  const navProjects = document.createElement("div");
  navProjects.classList.add("nav-projects");
  navProjects.innerText = "navProjects";
  nav.append(navProjects);
  return nav;
}

function buildBase() {
  // create the grid contianer
  const element = document.createElement("div");
  element.classList.add("container");
  element.innerHTML =
    '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />';

  // create the nav menu
  element.append(nav());

  // create the main area
  const main = document.createElement("div");
  main.classList.add("main-area");
  element.append(main);
  main.innerHTML = "main area";

  // create the footer
  const footer = document.createElement("div");
  footer.classList.add("footer");
  main.append(footer);
  footer.innerHTML = "footer";

  return element;
}

document.body.appendChild(buildBase());

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
