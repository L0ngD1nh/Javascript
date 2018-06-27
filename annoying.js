//Ask the user "Are we there yet"
var answer = prompt("Are we there yet");


//Keep asking again and again until they enter "yes" OR "yeah"
while (answer.indexOf("yes") === -1) {
	var answer = prompt("are we there yet");
}
//Then, alert"Yay, we finally made it!"
alert("Yay, we made it!!");
