import inquirer from "inquirer";
let todo = [];
let condition = true;
while (condition) {
    let todos = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "what would u like to add in our todos? "
        },
        {
            name: "todolist",
            type: "confirm",
            message: "Are you sure ?",
            default: "true"
        },
    ]);
    todo.push(todos.todo);
    console.log(todo);
    condition = todos.todolist;
}
