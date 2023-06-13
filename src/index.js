import "./styles.css";
import "./normalize.css";
import {
    createHomeDOM,
    createSidebar,
    displayMain,
    projectForm,
    addProjectToSidebar,
    todoForm,
    domTodos
} from "./DOM_Module";
import {
    createTodo,
    createProject,
    sortProjectTodos
} from "./TodoLogic_Module"

//handles all projects
let projectHash = {}; 
function addToProjectArr(object){
    projectHash[`${object.name}`] = object;
};

//creates home page to work with
const home = createProject("Home", null);
addToProjectArr(home);
createHomeDOM();
createSidebar();
displayMain(projectHash["Home"]);
addTodoListener();
let currentProject = home;

//add logic to the sidebar buttons
const homeBtn = document.querySelector("#Home")
    homeBtn.addEventListener("click", () => {
    displayMain(home);
});

const newProject = document.querySelector("#newProject");
newProject.addEventListener("click", () => {
    projectForm();
    handleProjectSubmit();
})

//displays sorted todos on the current page
function displayTodos(currentProject) {
    const sortedArr = sortProjectTodos(currentProject.todos);
    domTodos(sortedArr);
}

//Event listener 
function addTodoListener(){
        const todoButton = document.querySelector("#todo-button");
        todoButton.addEventListener("click", () => {
            todoForm();
            handleTodoSubmit(currentProject);
    })
}

function addEventListenersToSidebar() {
    function handleClick(id) {
        displayMain(projectHash[id]);
        displayTodos(projectHash[id]);
        addTodoListener();
        currentProject = id;
    
    }

    const projectButtons = document.querySelectorAll("#project > button");

    projectButtons.forEach(button => {
        button.removeEventListener("click", () => handleClick(button.id));
        button.addEventListener("click", () => handleClick(button.id));
    });
}

// Sumbits
function handleProjectSubmit() {
    const inputName = document.querySelector("#name");
    const inputDueDate = document.querySelector("#due-date");
    const projectForm = document.querySelector("#project-form");

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const newProject = createProject(inputName.value, inputDueDate.value);
        addToProjectArr(newProject);
        console.table(projectHash);
        displayMain(newProject);
        addProjectToSidebar(newProject); 
        addEventListenersToSidebar();
        addTodoListener();
        currentProject = newProject;
    }) 
}

function handleTodoSubmit(project) {
    const todoForm = document.querySelector("#todo-form");
    const name = document.querySelector("#name");
    const priorityInputs = document.querySelectorAll('input[name="priority"]');
    const dueDate = document.querySelector("#due-date");
    const startDate = document.querySelector("#start-date");
    const description = document.querySelector("#description");

    todoForm.addEventListener("submit", (e) => {
        e.preventDefault();
        let priorityValue;
        for (const input of priorityInputs) {
            if (input.checked) {
                priorityValue = parseInt(input.value);
                break;
            }
        }
        const newTodo = createTodo(name.value, priorityValue, dueDate.value, startDate.value, description.value)
        project.todos.push(newTodo);
        console.table(project);
        displayMain(project);
        displayTodos(project);
        addTodoListener();
    })

} 

