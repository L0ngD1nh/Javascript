// Excercise 1
//declare the function CAPITALIZE and string INPUT
function capitalize(str) {
	// if INPUT is a number, returns "thats not a string"
	if (typeof str === "number") {
		return "thats not a string!"
		// if its not a number the bottom code will activate
	}
	// only run CAPITALIZE code when its not a NUMBER input
	return str.charAt(0).toUpperCase() +
		str.slice(1);
}
var city = "paris"; // "paris"
var capitalize = capitalize(city); // "Paris"
var num = 340; //" thats not a string"

// Excercise 2
// isEven() - a function isEven() which takes a single numeric argument and returns True if the number is even, and False otherwise. ext: isEven(4); = true
function isEven(x) {
	if (x % 2 === 0) {
		return true
	} else {
		return false
	}
}
//Version 2.0 of excercise 2
//boolean statement on return, True or False.
function isEven(x) {
	return x % 2 === 0;
}
// Excercise 3
//factorial() - a function factorial() which takes a single numeric argument and returns the factorial of that number. ect: factorial(5); = 120
function factorial(num) {
	var result = 1;
	for (var i = 1; i <= num; i += 2) {
		result = result * i;
	}
	return result;
}
// Using For loops to get  repeating additions of the same number
// Multiplication		 
function getMultiply(x, y) {
	var result = 0;
	for (var n = 1; n < y; n++) {
		result = result + x;
	}
	return result;
}
//kebabToSnake() - a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version. replace "-"s with "_"s.
function kababToSnake(str) {
	//replace all "-" to "_"
	var newStr = str.replace(/-/g, "–");
	//return str
	return newStr;
}
