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

  const navSeparator1 = document.createElement("div");
  navSeparator1.classList.add("nav-separator");
  nav.append(navSeparator1);

  const navFilters = document.createElement("div");
  navFilters.classList.add("nav-filters");
  nav.append(navFilters);

  const navFilterEverything = document.createElement("div");
  navFilterEverything.classList.add("nav-filter", "nf-everything");
  const navFilterEverythingIcon = document.createElement("div");
  navFilterEverythingIcon.classList.add("nf-icon");
  navFilterEverythingIcon.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 48px;">all_inbox</span>';
  const navFilterEverythingLabel = document.createElement("div");
  navFilterEverythingLabel.classList.add("nf-Label");
  navFilterEverythingLabel.innerText = "Everything";
  navFilterEverything.append(navFilterEverythingIcon);
  navFilterEverything.append(navFilterEverythingLabel);
  navFilters.append(navFilterEverything);

  const navFilterToday = document.createElement("div");
  navFilterToday.classList.add("nav-filter", "nf-today");
  const navFilterTodayIcon = document.createElement("div");
  navFilterTodayIcon.classList.add("nf-icon");
  navFilterTodayIcon.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 48px;">today</span>';
  const navFilterTodayLabel = document.createElement("div");
  navFilterTodayLabel.classList.add("nf-Label");
  navFilterTodayLabel.innerText = "Today";
  navFilterToday.append(navFilterTodayIcon);
  navFilterToday.append(navFilterTodayLabel);
  navFilters.append(navFilterToday);

  const navFilterUpcoming = document.createElement("div");
  navFilterUpcoming.classList.add("nav-filter", "nf-upcoming");
  const navFilterUpcomingIcon = document.createElement("div");
  navFilterUpcomingIcon.classList.add("nf-icon");
  navFilterUpcomingIcon.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 48px;">event_upcoming</span>';
  const navFilterUpcomingLabel = document.createElement("div");
  navFilterUpcomingLabel.classList.add("nf-Label");
  navFilterUpcomingLabel.innerText = "Upcoming";
  navFilterUpcoming.append(navFilterUpcomingIcon);
  navFilterUpcoming.append(navFilterUpcomingLabel);
  navFilters.append(navFilterUpcoming);

  const navFilterArchive = document.createElement("div");
  navFilterArchive.classList.add("nav-filter", "nf-archive");
  const navFilterArchiveIcon = document.createElement("div");
  navFilterArchiveIcon.classList.add("nf-icon");
  navFilterArchiveIcon.innerHTML =
    '<span class="material-symbols-outlined" style="font-size: 48px;">folder_open</span>';
  const navFilterArchiveLabel = document.createElement("div");
  navFilterArchiveLabel.classList.add("nf-Label");
  navFilterArchiveLabel.innerText = "Archive";
  navFilterArchive.append(navFilterArchiveIcon);
  navFilterArchive.append(navFilterArchiveLabel);
  navFilters.append(navFilterArchive);

  const navSeparator2 = document.createElement("div");
  navSeparator2.classList.add("nav-separator");
  nav.append(navSeparator2);

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
