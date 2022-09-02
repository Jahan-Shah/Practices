let todos = ["Get Up Early", "Do The Chores"];

let input = prompt("Enter command");

while (input !== "quit" && input !== "q") {
  if (input === "new") {
    const newTodo = prompt("Enter new todo");
    todos.push(newTodo);
    console.log(`${newTodo} has been added to the list.`);
  } else if (input === "list") {
    console.log("*********************");
    for (let i = 0; i < todos.length; i++) {
      console.log(`${i + 1}: ${todos[i]}`);
    }
    console.log("*********************");
  } else if (input === "delete") {
    const indexStr = prompt("Enter Index to delete");
    const index = parseInt(indexStr);
    if (!Number.isNaN(index)) {
      const deleted = todos.splice(index - 1, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Invalid index");
    }
  }

  input = prompt("Enter command");
}
console.log("App Quited");
