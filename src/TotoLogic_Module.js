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
        todos: {},
    }
}

export {
    createTodo,
    createProject
}