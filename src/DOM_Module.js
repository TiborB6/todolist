import {createTodo, createProject} from "./TotoLogic_Module"

const content = document.querySelector("content");

//Creates the basic structure of the page
function createHomeDOM() {
    const header = document.createElement("div");
        header.classList.add("header");
    content.appendChild(header);
        const logo = document.querySelector("p");
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
    
    const sidebarTop = document.querySelector("div");
        sidebarTop.classList.add("sidebar-top");
    sidebar.appendChild(sidebarTop);
        const homeButton = document.createElement("button");
            homeButton.textContent = "Home";
        sidebarTop.appendChild(homeButton);
        const newProjectButton = document.createElement("button");
            newProjectButton.textContent = "+ New Project";
        sidebarTop.appendChild(newProjectButton);


    const sidebarBottom = document.createElement("div");
        sidebarTop.classList.add("sidebar-bottom");
    sidebar.appendChild(sidebarBottom);
        const settingsButton = document.createElement("button"); 
            settingsButton.textContent = "Settings";
        sidebarBottom.appendChild(settingsButton);
        const impressumButton = document.createElement("button");
            impressumButton.textContent = "Impressum";
        sidebarBottom.appendChild(impressumButton);
}

//Logic for sidebar
function eventListenerSidebar(){
    
}

//Logic for Main Display 
function displayMain(project) {

}

export {
    createHomeDOM,
    createSidebar,
    eventListenerSidebar,
    displayMain
}