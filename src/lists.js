//module for managing lists
const myProjects = (() => {
  function functionThree() {
    console.log("Function 3");
  }
  return {
    functionThree,
  };
})();
export { myProjects };

//
/* factory to make players 
const Player = (name, playerSymbol) => {
  let pName = name;
  let pSymbol = playerSymbol;
  const getSymbol = () => pSymbol;
  const getName = () => pName;
  function setName(newName) {
    if (newName === "") {
    } else {
      pName = newName;
    }
  }
  return { getSymbol, getName, setName };
}; 
const player1 = Player("Player 1", "X");

  class MenuItem {
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
