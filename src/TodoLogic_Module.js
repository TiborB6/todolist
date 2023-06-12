function createTodo(name, priority, dueDate, startDate, Description) {
    return {
        name: name,
        priority: priority,
        dueDate: dueDate,
        startDate: startDate,
        Description: Description,
    }
}

function createProject(name, dueDate) {
    return {
        name: name,
        dueDate: dueDate,
        todos: [],
    }
}

function sortProjectTodos(arr){
    const sortedArr = [...arr]; // Create a shallow copy of the array to avoid modifying the original array
    sortedArr.sort((a, b) => a.priority + b.priority); // Sort the array based on priority
    console.log(sortedArr);
    return sortedArr;

}

export {
    createTodo,
    createProject,
    sortProjectTodos
}