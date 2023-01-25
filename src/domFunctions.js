const domFunctions = (name, date) => {
  function buildElement(elementType, id, classList, innerHTML) {
    const element = document.createElement(elementType);
    if (id === undefined) {
      id = "";
    }
    if (classList === undefined) {
      classList = "";
    }
    if (innerHTML === undefined) {
      innerHTML = "";
    }
    element.id = id;
    element.classList.add(...classList);
    element.innerHTML = innerHTML;
    return element;
  }
  function nav() {
    const nav = buildElement("div", "", ["nav"]);
    // top section including profile
    const navTop = buildElement("div", "", ["nav-top"]);
    //profile section
    const navProfile = buildElement("div", "", ["nav-profile"]);
    navTop.append(navProfile);
    //profile icon
    const profileIcon = buildElement(
      "button",
      "",
      ["profile-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">account_circle</span>'
    );
    navProfile.appendChild(profileIcon);
    //profile name
    const profileName = buildElement(
      "div",
      "",
      ["profile-name"],
      "Profile Name"
    );
    navProfile.appendChild(profileName);
    //shrink nav menu icon
    const shrinkNav = buildElement(
      "button",
      "",
      ["shrink-nav"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">chevron_left</span>'
    );
    navTop.appendChild(shrinkNav);
    nav.append(navTop);
    const navSeparator1 = buildElement("div", "", ["nav-separator"]);
    nav.append(navSeparator1);
    const navFilters = buildElement("div", "", ["nav-filters"]);
    nav.append(navFilters);
    const navFilterEverything = buildElement("button", "", [
      "nav-filter",
      "nf-everything",
    ]);
    const navFilterEverythingIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">all_inbox</span>'
    );
    navFilterEverything.append(navFilterEverythingIcon);
    const navFilterEverythingLabel = buildElement(
      "div",
      "",
      ["nf-label"],
      "Everything"
    );
    navFilterEverything.append(navFilterEverythingLabel);
    navFilters.append(navFilterEverything);
    const navFilterToday = buildElement("button", "", [
      "nav-filter",
      "nf-today",
    ]);
    const navFilterTodayIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">today</span>'
    );
    navFilterToday.append(navFilterTodayIcon);
    const navFilterTodayLabel = buildElement("div", "", ["nf-label"], "Today");
    navFilterToday.append(navFilterTodayLabel);
    navFilters.append(navFilterToday);

    const navFilterUpcoming = buildElement("button", "", [
      "nav-filter",
      "nf-upcoming",
    ]);
    const navFilterUpcomingIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">event_upcoming</span>'
    );
    navFilterUpcoming.append(navFilterUpcomingIcon);
    const navFilterUpcomingLabel = buildElement(
      "div",
      "",
      ["nf-label"],
      "Upcoming"
    );
    navFilterUpcoming.append(navFilterUpcomingLabel);
    navFilters.append(navFilterUpcoming);

    const navFilterArchive = buildElement(
      "button",
      "",
      ["nav-filter", "nf-archive"],
      ""
    );
    const navFilterArchiveIcon = buildElement(
      "div",
      "",
      ["nf-icon"],
      '<span class="material-symbols-outlined" style="font-size: 48px;">folder_open</span>'
    );
    const navFilterArchiveLabel = buildElement(
      "div",
      "",
      ["nf-label"],
      "Archive"
    );
    navFilterArchive.append(navFilterArchiveIcon);
    navFilterArchive.append(navFilterArchiveLabel);
    navFilters.append(navFilterArchive);

    const navSeparator2 = buildElement("div", "", ["nav-separator"], "");
    nav.append(navSeparator2);

    //TODO load projects here
    const navProjects = buildElement(
      "div",
      "",
      ["nav-projects"],
      "Nav Projects"
    );
    nav.append(navProjects);

    // create the footer
    const footer = buildElement("div", "", ["footer"], "Footer");
    nav.append(footer);
    return nav;
  }

  function buildBase() {
    // create the grid contianer
    const element = buildElement(
      "div",
      "",
      ["container"],
      '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />'
    );

    // create the nav menu
    element.append(nav());

    // create the main area
    const main = buildElement("div", "display", ["main-area"]);
    element.append(main);
    const title = buildElement("h1", "", [], "Everything");
    main.append(title);
    const todoDisplay = buildElement("div", "display-todos", ["todo-holder"]);
    main.appendChild(todoDisplay);
    const addTodoIcon = buildElement(
      "div",
      "add-todo",
      [],
      '<span class="material-symbols-outlined" style="font-size: 2rem;">add_box</span>'
    );
    main.appendChild(addTodoIcon);
    document.body.append(element);

    //create the modal - hidden by default
    const modal = buildElement("div", "myModal", ["modal"]);

    const modalContent = buildElement("div", "", ["modal-content"]);

    const modalForm = buildElement(
      "div",
      "",
      ["modal-form"],
      '<form action="" method="post" id="new-todo">' +
        '<label for="newTitle">Title<input type="text" name="newTitle" id="new-title" required /></label>' +
        '<label for="newDescription">Description<input type="text" name="new-description" id="new-description" required /></label>' +
        '<label for="new-due">Due:<input type="date" name="new-due" id="new-due" required /></label>' +
        '<label for="high-priority">High Priority<input type="radio" name="new-priority" id="high" class="new-priority"/></label>' +
        '<label for="medium-priority">Medium Priority<input type="radio" name="new-priority" id="medium" checked="true"  class="new-priority"/></label>' +
        '<label for="low-priority">Low Priority<input type="radio" name="new-priority" id="low"  class="new-priority"/></label>' +
        '<label for="submit"><input type="button" value="Submit" id="new-submit" /></label>' +
        "</form>"
    );
    modalContent.append(modalForm);
    const modalClose = buildElement("span", "", ["close"], "&times;");
    modalContent.append(modalClose);
    modal.append(modalContent);
    main.append(modal);
    return;
  }
  function filterPriority(item) {
    if (item.getPriority() === "High Priority") {
      return true;
    }
    return false;
  }

  function renderTodoList(todoList, filter) {
    let display = document.getElementById("display-todos");
    display.innerHTML = "";
    console.log(todoList.filter(filterPriority));
    todoList.forEach((item, index) => {
      //create the container for the item
      const todoContainer = buildElement("button", "", ["todo-item"]);
      todoContainer.dataset.index = index;
      display.append(todoContainer);
      //add the checkbox icon
      const todoCheck = buildElement(
        "button",
        "",
        ["todo-check"],
        '<span class="material-symbols-outlined"style="font-size: 1.5rem;">check_box_outline_blank</span>'
      );
      todoContainer.append(todoCheck);
      // add the title */
      const todoTitle = buildElement(
        "button",
        "",
        ["todo-title"],
        item.getTitle()
      );

      todoContainer.appendChild(todoTitle);
      //add the due date
      const todoDue = buildElement("button", "", ["todo-due"], item.getDue());
      todoContainer.appendChild(todoDue);
      // add the priority
      const todoPriority = buildElement(
        "button",
        "",
        ["todo-priority"],
        item.getPriority()
      );
      todoContainer.appendChild(todoPriority);
    });
  }
  function openModal() {
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
  function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }
  return {
    nav,
    buildBase,
    renderTodoList,
    openModal,
    closeModal,
  };
};

export { domFunctions };
