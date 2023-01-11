//module for managing lists
//factory function for creating projects
const todo = (title, description, dueDate, priority) => {
  let todoTitle = title;
  let todoDescription = description;
  let todoDue = dueDate;
  let todoPriority = priority;
  const getTitle = () => todoTitle;
  const getDescription = () => todoDescription;
  const getDue = () => todoDue;
  const getPriority = () => todoPriority;
  function newTodo() {}
  return {
    newTodo,
    getTitle,
    getDescription,
    getDue,
    getPriority,
  };
};
const todoFunctions = () => {
  let todoList = [];
  let testy = todo(
    "This is a test title",
    "This is a todo description",
    "07/04/2023",
    "High Priority"
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
  return { getList };
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
