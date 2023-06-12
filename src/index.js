import "./styles.css";
import "./normalize.css";
import {
    createHomeDOM,
    createSidebar,
    displayMain,
    projectForm,
    addProjectToSidebar
} from "./DOM_Module";
import {
    createTodo,
    createProject
} from "./TodoLogic_Module"

//handles all projects
let projectHash = {}; 
function addToProjectArr(object){
    projectHash[`${object.name}`] = object;
};

//Creates the Home page
const home = createProject("Home", null);
addToProjectArr(home);
createHomeDOM();
createSidebar();
displayMain(projectHash["Home"]);

//Logic for sidebar buttons
const homeBtn = document.querySelector("#Home")
homeBtn.addEventListener("click", () => {
    displayMain(home);
});

const newProject = document.querySelector("#newProject");
newProject.addEventListener("click", (e) => {
    projectForm();
    handleProjectSubmit();
})

//Handle Porject Submit
function handleProjectSubmit() {
    const inputName = document.querySelector("#name");
    const inputDueDate = document.querySelector("#due-date");
    const projectForm = document.querySelector("#project-form");

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        addToProjectArr(createProject(inputName.value, inputDueDate.value));
        console.table(projectHash);
        displayMain(projectHash[inputName.value]);
        addProjectToSidebar(projectHash[inputName.value]); 
    }) 
}

//Handle Todo Submit


