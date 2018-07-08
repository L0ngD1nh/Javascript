var todos = ["Buy eggs"];
//to prevent from JS loading before page content has finished loading
window.setTimeout(function () {
	// ask user, store as var-input
	var input = prompt("what would you like to do?");
	// put input prompt into a while loop unless user input is "quit"
	while (input !== "quit") {
		if (input === "list") {
			console.log(todos);
		} else if (input === "new") {
			//ask for new todo
			var newTodo = prompt("Enter new todo");
			//ask to todos array
			todos.push(newTodo);
			// shows the new list on console
			console.log(todos);
		}
		//ask again for new input
		input = prompt("what would you like to do?");
	}
	console.log("You've quit the app !!!!");
}, 500);
