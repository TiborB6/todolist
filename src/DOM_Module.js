import HomeIcon from "./icons/home-outline.svg";

//Creates the basic structure of the page
function createHomeDOM() {
    const content = document.querySelector("#content");
    const header = document.createElement("div");
        header.classList.add("header");
    content.appendChild(header);
        const logo = document.createElement("p");
            logo.textContent = "Todo List"
        header.appendChild(logo);

    const sidebar = document.createElement("div");
        sidebar.classList.add("sidebar");
    content.appendChild(sidebar);

    const mainPage = document.createElement("div");
        mainPage.classList.add("main-page");
    content.appendChild(mainPage);    
}

function createSidebar(){
    const sidebar = document.querySelector(".sidebar");
    
    const sidebarTop = document.createElement("div");
        sidebarTop.classList.add("sidebar-top");
    sidebar.appendChild(sidebarTop);
        const homeButton = document.createElement("button");
            homeButton.id = "Home";
            homeButton.textContent = "Home";
            const homeSvg = document.createElement("img");
                homeSvg.src = HomeIcon;
            homeButton.appendChild(homeSvg);
        sidebarTop.appendChild(homeButton);

        const projects = document.createElement("div");
            projects.id = "project";
        sidebarTop.appendChild(projects);

        const newProjectButton = document.createElement("button");
            newProjectButton.id = "newProject"
            newProjectButton.textContent = "+ New Project";
        sidebarTop.appendChild(newProjectButton);


    const sidebarBottom = document.createElement("div");
        sidebarBottom.classList.add("sidebar-bottom");
    sidebar.appendChild(sidebarBottom);
        const settingsButton = document.createElement("button"); 
            settingsButton.textContent = "Settings";
        sidebarBottom.appendChild(settingsButton);
        const impressumButton = document.createElement("button");
            impressumButton.textContent = "Impressum";
        sidebarBottom.appendChild(impressumButton);
}

//Logic for Main Display 
function displayTodo(todo) {

}

function displayMain(project) {
    const main = document.querySelector(".main-page");
    main.innerHTML = "";
    const h1 = document.createElement("h1");
        h1.textContent = project.name;
    main.appendChild(h1);

    const todos = document.createElement("div");
        todos.classList.add("todos");
    main.appendChild(todos);

    const todoAddButton = document.createElement("button");
        todoAddButton.textContent = "+ Todo";
    main.appendChild(todoAddButton);
}

//Project Form
function projectForm() {
    const main = document.querySelector(".main-page");
    main.innerHTML = "";
    const projectForm = document.createElement("form");
    projectForm.method = "#";
    projectForm.id = "project-form";
    const name = document.createElement("input");
        name.id = "name";
        name.value = "";
        const nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", "name");
            nameLabel.textContent = "Project Name";
    projectForm.appendChild(name);
    projectForm.appendChild(nameLabel);

    const dueDate = document.createElement("input");
        dueDate.id = "due-date";
        dueDate.value = "";
        const dueDateLabel = document.createElement("label");
            dueDateLabel.setAttribute("for", "dueDate");
            dueDateLabel.textContent = "due Date"
    projectForm.appendChild(dueDate);
    projectForm.appendChild(dueDateLabel);


    const submit = document.createElement("button");
        submit.id = "project-submit";
        submit.type = "submit";
        submit.textContent = "Create Project";
    projectForm.appendChild(submit);

    main.appendChild(projectForm);
}

function addProjectToSidebar(project) {
    const projects = document.querySelector("#project")

    const newProjectButtons = document.createElement("button");
        newProjectButtons.textContent = `${project.name}`;
    projects.appendChild(newProjectButtons);
}
//Todo Form



export {
    createHomeDOM,
    createSidebar,
    displayMain,
    projectForm,
    addProjectToSidebar
}