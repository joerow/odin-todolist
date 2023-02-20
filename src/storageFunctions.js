const storageFunctions = () => {
  function populateStorage(unsavedList, isAProject) {
    if (isAProject === "isAProject") {
      console.log("storing projects");
      let x = [];
      for (let index = 0; index < unsavedList.length; index++) {
        x.push(unsavedList[index]);
      }
      window.localStorage.setItem("projects", JSON.stringify(x));
      console.log("saved projects to storage");
    } else {
      console.log("Saving lists" + unsavedList);
      let x = [];
      for (let index = 0; index < unsavedList.length; index++) {
        x.push(unsavedList[index].getAllDetails());
      }
      window.localStorage.setItem("list", JSON.stringify(x));
      console.log("saved to storage");
    }
  }

  const retreiveStorage = (isAProject) => {
    if (isAProject === "isAProject") {
      let loadedProjects = JSON.parse(window.localStorage.getItem("projects"));
      if (loadedProjects != null) {
        console.log(
          "List retreived from storage. Length: " + loadedProjects.length
        );
        return loadedProjects;
      }
    } else {
      let loadedList = JSON.parse(window.localStorage.getItem("list"));
      //console.log(newobjectslist[3].todoTitle);
      if (loadedList != null) {
        console.log(
          "List retreived from storage. Length: " + loadedList.length
        );
        return loadedList;
      }
    }
  };
  return {
    populateStorage,
    retreiveStorage,
  };
};

export { storageFunctions };
