import "./styles.css";
import "./normalize.css";
import {
    createHomeDOM,
    createSidebar,
    displayMain,
    projectForm
} from "./DOM_Module";
import {
    createTodo,
    createProject
} from "./TodoLogic_Module"

//handles all projects
let projectArr = {}; 
function addToProjectArr(object){
    projectArr = {projectArr, object}
};

//Creates the Home page
const home = createProject("Task for Today", null);
addToProjectArr(home);
createHomeDOM();
createSidebar();
displayMain(home);

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
        const test = createProject(inputName.value, inputDueDate.value);
        addToProjectArr(test);
        console.log(projectArr);
        displayMain(test);
    }) 
}


