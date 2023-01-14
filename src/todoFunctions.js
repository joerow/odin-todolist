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
  };
};
const todoFunctions = () => {
  let todoList = [];
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
  return { getList, toggleArchiveStatus };
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
