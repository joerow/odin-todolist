import { todoFunctions } from "./todoFunctions.js";

const storageFunctions = () => {
  function populateStorage(unsavedList) {
    console.log(unsavedList);
    let x = [];
    for (let index = 0; index < unsavedList.length; index++) {
      x.push(unsavedList[index].getAllDetails());
    }
    console.log(JSON.stringify(x));
    window.localStorage.setItem("list", JSON.stringify(x));
    console.log("saved to storage");
  }
  const retreiveStorage = () => {
    let loadedList = JSON.parse(window.localStorage.getItem("list"));
    //console.log(newobjectslist[3].todoTitle);
    if (loadedList != null) {
      console.log("List retreived from storage. Length: " + loadedList.length);
      return loadedList;
    }
  };
  return {
    populateStorage,
    retreiveStorage,
  };
};

export { storageFunctions };
