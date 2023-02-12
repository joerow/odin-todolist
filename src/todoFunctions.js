import { format, compareAsc, parseISO, isFuture } from "date-fns";
import { isToday } from "date-fns";
import { el } from "date-fns/locale";
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
  let todoDue = parseISO(dueDate);
  let todoPriority = priority;
  let todoProject = project;
  let todoArchiveStatus = archiveStatus;
  let uid = null;
  const setUid = function () {
    if (uid === null) {
      uid = Date.now().toString(36) + Math.random().toString(36).slice(2);
      return uid;
    } else {
      return uid;
    }
  };
  setUid();
  const getUid = () => uid;
  const getTitle = () => todoTitle;
  const setTitle = (newTitle) => (todoTitle = newTitle);
  const getDescription = () => todoDescription;
  const setDescription = (newDescription) => (todoDescription = newDescription);
  const getDueFormatted = () => format(todoDue, "dd-MM-yyyy");
  const getDueISO = () => todoDue;
  const setDue = (newDue) => (todoDue = parseISO(newDue));
  const getPriority = () => todoPriority;
  const setPriority = (newPriority) => (todoPriority = newPriority);
  const getProject = () => todoProject;
  const setProject = (newProject) => (todoProject = newProject);
  const getArchiveStatus = () => todoArchiveStatus;
  const setArchiveStatus = (newStatus) => (todoArchiveStatus = newStatus);
  const getAllDetails = () => {
    return {
      todoTitle,
      todoDescription,
      todoDue,
      todoPriority,
      todoProject,
      todoArchiveStatus,
      uid,
    };
  };
  function newTodo() {}
  return {
    newTodo,
    getTitle,
    setTitle,
    getDescription,
    setDescription,
    getDueFormatted,
    getDueISO,
    setDue,
    getPriority,
    setPriority,
    getProject,
    setProject,
    getArchiveStatus,
    setArchiveStatus,
    getAllDetails,
    getUid,
  };
};
const todoFunctions = (loadedList) => {
  let todoList = [];
  const loadDefaults = () => {
    let testy = todo(
      "This is a test title",
      "This is a todo description",
      "2023-01-18",
      "High",
      "",
      false,
      "1"
    );
    let testy2 = todo(
      "Here is another todo item",
      "This is a todo description",
      "2023-01-18",
      "Low",
      "",
      true,
      "2"
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
        loadedList[index].todoArchiveStatus,
        loadedList[index].uid
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
  const filterToday = (item) => {
    if (isToday(item.getDueISO())) {
      return true;
    } else {
      return false;
    }
  };
  const filterUpcoming = (item) => {
    if (isFuture(item.getDueISO())) {
      return true;
    } else {
      return false;
    }
  };
  /*   const findUid = (uid) => {
    if (getUid() === uid) {
      return true;
    } else {
      return false;
    }
  }; */

  const getList = (filter) => {
    if (filter === "archiveView") {
      console.log("filter = archiveView so showing archived");
      return todoList.filter(filterArchived);
    } else if (filter === "everythingView") {
      console.log("filter = everythingView so showing unArchived");
      return todoList.filter(filterUnArchived);
    } else if (filter === "todayView") {
      console.log("filter = today so showing items for today");
      return todoList.filter(filterToday);
    } else if (filter === "upcomingView") {
      console.log("filter = upcoming so showing items in the future");
      return todoList.filter(filterUpcoming);
    } else {
      console.log("list didn't filter here");
      return todoList;
    }
  };
  const toggleArchiveStatus = (uid) => {
    const todoitem = todoList.find((obj) => {
      return obj.getUid() === uid;
    });
    console.log("todoitem: " + todoitem);
    if (todoitem.getArchiveStatus() === true) {
      todoitem.setArchiveStatus(false);
      console.log("archive status set to false");
    } else {
      todoitem.setArchiveStatus(true);
      console.log("archive status set to true");
    }
  };
  const getIndex = (uid) => {
    const todoItemIndex = todoList.findIndex((obj) => {
      return obj.getUid() === uid;
    });
    console.log("todo item index found: " + todoItemIndex);
    return todoItemIndex;
  };
  const todoDelete = (uid) => {
    const todoItemIndex = getIndex(uid);
    console.log("deleting todo item at index " + todoItemIndex);
    todoList.splice(todoItemIndex, 1);
  };
  const todoEdit = (
    uid,
    newTitle,
    newDescription,
    newDue,
    newPriority,
    newProject
  ) => {
    const todoItemIndex = getIndex(uid);
    console.log(todoList[todoItemIndex].getTitle());
    todoList[todoItemIndex].setTitle(newTitle);
    todoList[todoItemIndex].setDescription(newDescription);
    todoList[todoItemIndex].setDue(newDue);
    todoList[todoItemIndex].setPriority(newPriority);
    todoList[todoItemIndex].setProject(newProject);
  };

  const togglePriority = (uid) => {
    const todoitem = todoList.find((obj) => {
      return obj.getUid() === uid;
    });
    if (todoitem.getPriority() === "High") {
      todoitem.setPriority("Medium");
      console.log("Priority set to medium");
    } else if (todoitem.getPriority() === "Medium") {
      todoitem.setPriority("Low");
      console.log("Priority set to Low");
    } else {
      todoitem.setPriority("High");
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
    todoDelete,
    todoEdit,
    getIndex,
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
