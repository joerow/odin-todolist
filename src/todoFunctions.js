//module for managing lists
//factory function for creating projects
const todo = (
  title,
  description,
  dueDate,
  priority,
  project,
  archiveStatus
) => {
  let todoTitle = title;
  let todoDescription = description;
  let todoDue = dueDate;
  let todoPriority = priority;
  let todoProject = project;
  let todoArchiveStatus = archiveStatus;
  const getTitle = () => todoTitle;
  const getDescription = () => todoDescription;
  const getDue = () => todoDue;
  const getPriority = () => todoPriority;
  const getProject = () => todoProject;
  const getArchiveStatus = () => todoArchiveStatus;
  const getAllDetails = () => {
    return {
      todoTitle,
      todoDescription,
      todoDue,
      todoPriority,
      todoProject,
      todoArchiveStatus,
    };
  };
  const setArchiveStatus = (newStatus) => (todoArchiveStatus = newStatus);
  const setPriority = (newPriority) => (todoPriority = newPriority);
  function newTodo() {}
  return {
    newTodo,
    getTitle,
    getDescription,
    getDue,
    getPriority,
    getProject,
    setPriority,
    getArchiveStatus,
    setArchiveStatus,
    getAllDetails,
  };
};
const todoFunctions = (loadedList) => {
  let todoList = [];
  console.log(loadedList);
  const loadDefaults = () => {
    let testy = todo(
      "This is a test title",
      "This is a todo description",
      "2023-01-18",
      "High",
      "",
      false
    );
    let testy2 = todo(
      "Here is another todo item",
      "This is a todo description",
      "2023-01-18",
      "Low",
      "",
      true
    );
    todoList.push(testy, testy2);
    console.log("populated with defaults");
  };
  if (loadedList === undefined) {
    console.log("no list found so loading defaults");
    loadDefaults();
  } else {
    for (let index = 0; index < loadedList.length; index++) {
      let item = todo(
        loadedList[index].todoTitle,
        loadedList[index].todoDescription,
        loadedList[index].todoDue,
        loadedList[index].todoPriority,
        loadedList[index].todoProject,
        loadedList[index].todoArchiveStatus
      );
      todoList.push(item);
    }
    console.log("current list" + todoList);
    let x = [];
    for (let index = 0; index < todoList.length; index++) {
      x.push(todoList[index].getAllDetails());
    }
    localStorage.setItem("list", JSON.stringify(x));
  }

  const filterArchived = (item) => {
    if (item.getArchiveStatus() === true) {
      return true;
    } else {
      return false;
    }
  };
  const filterUnArchived = (item) => {
    if (item.getArchiveStatus() === false) {
      return true;
    } else {
      return false;
    }
  };

  const getList = (filter) => {
    if (filter === "archived") {
      console.log("trying to filter list - archived");
      return todoList.filter(filterArchived);
    } else if (filter === "unarchived") {
      console.log("trying to filter list - unarchived");
      return todoList.filter(filterArchived);
    } else {
      console.log("list didn't filter here");
      return todoList;
    }
  };
  const toggleArchiveStatus = (index) => {
    if (todoList[index].getArchiveStatus()) {
      todoList[index].setArchiveStatus(false);
      console.log("archive status set to false");
    } else {
      todoList[index].setArchiveStatus(true);
      console.log("archive status set to true");
    }
  };
  const togglePriority = (index) => {
    if (todoList[index].getPriority() === "High") {
      todoList[index].setPriority("Medium");
      console.log("Priority set to medium");
    } else if (todoList[index].getPriority() === "Medium") {
      todoList[index].setPriority("Low");
      console.log("Priority set to Low");
    } else {
      todoList[index].setPriority("High");
      console.log("Priority set to High");
    }
  };
  const newTodo = (
    title,
    description,
    dueDate,
    priority,
    project,
    archiveStatus
  ) => {
    let newtitle = todo(
      title,
      description,
      dueDate,
      priority,
      project,
      archiveStatus
    );
    todoList.push(newtitle);
  };

  return {
    getList,
    toggleArchiveStatus,
    togglePriority,
    newTodo,
    filterArchived,
    filterUnArchived,
  };
};
export { todo, todoFunctions };

/* class MenuItem {
  constructor(title, description, imageName) {
    this.title = title;
    this.description = description;
    this.imageName = imageName;
  }
}
let burrito = new MenuItem(
  "Vegan Burritos",
  "Featuring cilantro-lime rice, chipotle-spiced black beans, sautéed peppers and onions, and a zesty avocado cream sauce",
  burritoImage
);
 */
/* Projects contain multiple todo lists which contain multiple todo items */
