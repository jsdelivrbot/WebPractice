var arr=[];
var choice=prompt("What would you like to do");
while(choice !== "quit") {

	if(choice === "new") {
		var element = prompt("Add a new todo")
		arr.push(element);
	} else if (choice === "list") {
		console.log(arr);
	} 
	choice=prompt("What would you like to do");
}