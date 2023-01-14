const domFunctions = (name, date) => {
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

    //TODO load projects here
    const navProjects = document.createElement("div");
    navProjects.classList.add("nav-projects");
    navProjects.innerText = "navProjects";
    nav.append(navProjects);

    // create the footer
    const footer = document.createElement("div");
    footer.classList.add("footer");
    nav.append(footer);
    footer.innerHTML = "footer";
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
    const title = document.createElement("h1");
    title.textContent = "Today:";
    main.append(title);
    main.id = "display";
    document.body.append(element);

    //create the model - hidden by default
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.id = "myModal";
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");
    const modalClose = document.createElement("span");
    modalClose.classList.add("close");
    modalClose.innerHTML = "&times;";
    modalContent.append(modalClose);
    const modalText = document.createElement("p");
    modalText.innerText = "Some text in the modal";
    modalContent.append(modalText);
    modal.append(modalContent);
    main.append(modal);
    return;
  }

  function renderTodoList(todoList) {
    let display = document.getElementById("display");
    todoList.forEach((item, index) => {
      //create the container for the item
      const todoContainer = document.createElement("div");
      todoContainer.classList.add("todo-item");
      todoContainer.dataset.index = index;
      display.append(todoContainer);
      //add the checkbox icon
      const todoCheck = document.createElement("div");
      todoCheck.classList.add("todo-check");
      todoCheck.innerHTML =
        '<span class="material-symbols-outlined"style="font-size: 1.5rem;">check_box_outline_blank</span>';
      todoContainer.append(todoCheck);
      //TODO edit the checkbox event listener to toggle
      /*       todoCheck.addEventListener(
        "click",
        (e) => todoCheck.parentElement.remove()
        //listHandler.toggleArchiveStatus(todoCheck.parentElement.dataset.index)
      );
      // add the title */
      const todoTitle = document.createElement("div");
      todoTitle.classList.add("todo-title");
      todoTitle.textContent = item.getTitle();
      todoContainer.appendChild(todoTitle);
      //add the due date
      const todoDue = document.createElement("div");
      todoDue.classList.add("todo-due");
      todoDue.textContent = item.getDue();
      todoContainer.appendChild(todoDue);
      // add the priority
      const todoPriority = document.createElement("div");
      todoPriority.classList.add("todo-priority");
      todoPriority.textContent = item.getPriority();
      todoContainer.appendChild(todoPriority);
    });
    const addTodoIcon = document.createElement("button");
    addTodoIcon.id = "add-todo";
    addTodoIcon.innerHTML =
      '<span class="material-symbols-outlined" style="font-size: 2rem;">add_box</span>';
    display.appendChild(addTodoIcon);
  }
  function openModal() {
    console.log("modal opened");
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
  return {
    nav,
    buildBase,
    renderTodoList,
    openModal,
  };
};

export { domFunctions };
