var todos = ["sleep"];

var input = prompt("What would you like to do?");

while (input !== "quit") {
  if (input === "list") {
    console.log("*************");
    todos.forEach((todo, index) => {
      console.log(`${index}: ${todo}`);
    });
    console.log("**************");
  } else if (input === "new") {
    var newTodo = prompt("enter new todo");
    todos.push(newTodo);
    console.log("added todo");
  } else if (input === "delete") {
    var todoNum = prompt("delete which todo?");
    todos.splice(todoNum, 1);
    console.log(todos);
  }

  input = prompt("What would you like to do?");
}
console.log("ok, you quit the app");
