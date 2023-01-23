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
  function newTodo() {}
  return {
    newTodo,
    getTitle,
    getDescription,
    getDue,
    getPriority,
    getProject,
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
      "07/04/2023",
      "High Priority",
      "",
      false
    );
    let testy2 = todo(
      "Here is another todo item",
      "This is a todo description",
      "12/02/2021",
      "Low Priority"
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
    localStorage.setItem("list", JSON.stringify(todoList));
  }

  //TODO make the retreive storage function convert the JSON back into todos
  const retreiveStorage = () => {
    let storagelist = JSON.parse(window.localStorage.getItem("list"));
    //console.log(newobjectslist[3].todoTitle);
  };
  const getList = () => {
    return todoList;
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

  return { getList, toggleArchiveStatus, newTodo };
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
