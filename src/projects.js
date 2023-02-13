import { sto } from "./storageFunctions";

const projects = () => {
  let projects = [];
  function newProject(name) {
    console.log("creating a new project");
    projects.push(name);
  }
  function listProjects() {
    return [...projects];
  }
  const loadDefaults = () => {
    projects.push("Default", "Personal", "Work");
    console.log("populated projects with defaults");
  };
  if (projects.length === 0) {
    console.log("no projects found so loading defaults");
    loadDefaults();
  } else {
    for (let index = 0; index < projects.length; index++) {
      projects.push(item);
    }
    console.log("current projects" + projects);
    let x = [];
    for (let index = 0; index < projects.length; index++) {
      x.push(projects[index]);
    }
    localStorage.setItem("projects", JSON.stringify(x));
  }
  return {
    newProject,
    listProjects,
  };
};

export { projects };
