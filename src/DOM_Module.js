import HomeIcon from "./icons/home-outline.svg";


function createHomeDOM() {//creates base grid and header 
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


function createSidebar(){//creates Sidabar base
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

//displays the main page
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
        todoAddButton.id = "todo-button";
        todoAddButton.textContent = "+ Add Todo";
    main.appendChild(todoAddButton);
}

// add current todos from the project
function domTodos(arr){
    const todos = document.querySelector(".todos");

    for (let i = 0; i < arr.length; i++) {
        const todo = document.createElement("div");
        todo.classList.add("todo");
            const name = document.createElement("p");
                name.textContent = arr[i].name;
            todo.appendChild(name);
            const dueDate = document.createElement("p");
                dueDate.textContent = arr[i].dueDate;
            todo.appendChild(dueDate);
            const startDate = document.createElement("p");
                startDate.textContent = arr[i].startDate;
            todo.appendChild(startDate);
            const description = document.createElement("p");
                description.textContent = arr[i].description;
            todo.appendChild(description);
        todos.appendChild(todo);
    };

}


function projectForm() {//add form for project
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
        dueDate.type = "date";
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

function addProjectToSidebar(project) {//Adds new project to the sidebar
    const projects = document.querySelector("#project")

    const newProjectButtons = document.createElement("button");
        newProjectButtons.textContent = `${project.name}`;
        newProjectButtons.id = `${project.name}`;
    projects.appendChild(newProjectButtons);
}



function todoForm() {// creates form on main to enter todo
    const main = document.querySelector(".main-page");
    main.innerHTML = "";

    const todoForm = document.createElement("form");
    todoForm.method = "#";
    todoForm.id = "todo-form";

    const name = document.createElement("input");
        name.id = "name";
        name.value = "";
        const nameLabel = document.createElement("label");
            nameLabel.setAttribute("for", "name");
            nameLabel.textContent = "Todo Name";
    todoForm.appendChild(name);
    todoForm.appendChild(nameLabel);

    const fieldset = document.createElement("fieldset");
    const legend = document.createElement("legend");
    legend.textContent = "Priority";
    for (let i = 0; i < 10; i++) {
        const inputElement = document.createElement('input');
        const label = document.createElement("label");
        inputElement.type = 'radio';
        inputElement.name = 'priority';
        inputElement.value = i + 1;
        inputElement.id = `priority-${i + 1}`;
        label.textContent = `${i + 1}`;
        label.setAttribute("for", `priority-${i + 1}`);
        fieldset.appendChild(label);
        fieldset.appendChild(inputElement);
    }
    fieldset.appendChild(legend);
    todoForm.appendChild(fieldset);

    const dueDate = document.createElement("input");
    dueDate.type = "date";
    dueDate.id = "due-date";
    dueDate.value = "";
    const dueDateLabel = document.createElement("label");
        dueDateLabel.setAttribute("for", "dueDate");
        dueDateLabel.textContent = "due Date"
    todoForm.appendChild(dueDate);
    todoForm.appendChild(dueDateLabel);

    const startDate = document.createElement("input");
    startDate.type = "date";
    startDate.id = "start-date";
    startDate.value = "";
    const startDateLabel = document.createElement("label");
        startDateLabel.setAttribute("for", "dueDate");
        startDateLabel.textContent = "due Date"
    todoForm.appendChild(startDate);
    todoForm.appendChild(startDateLabel);

    const description = document.createElement("input");
        description.type = "text";
        description.value = "";
        description.placeholder = "description";
        description.id = "description"
    todoForm.appendChild(description);

    const submit = document.createElement("button");
        submit.id = "project-submit";
        submit.type = "submit";
        submit.textContent = "Create Todo";
    todoForm.appendChild(submit);

    main.appendChild(todoForm);
}


export {
    createHomeDOM,
    createSidebar,
    displayMain,
    projectForm,
    addProjectToSidebar,
    todoForm,
    domTodos
}