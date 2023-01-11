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
const testfn = () => {
  const testfunction = (x) => {
    console.log("this is the test fn");
  };
  return { testfunction };
};
export { todo, testfn };

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
