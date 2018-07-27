//*printReverse([1,2,3,4]); *printReverse(["a","b","c"]);
//prints 4 3 2 1              //prints c b a
//Takes an array as an arugment and prints out the elements in the array in reverse order.
//use loop
function printReverse(arrays1) {
	for (var i = arrays1.length - 1; i >= 0; i--) {
		console.log(arrays1[i]);
	}
}
printReverse([1, 2, 3, 4, 5])

// write a function isUniform() which takes an array as an argument and returns true if all elements in the array are indentical.
//isUniform([1,1,1,1]); //true
//isUniform([1,2,1,1]); //false
function isUniform(arrays2) {
	// create new var to check first element of function arrays.
	var first = arrays2[0];
	//loop to the array, start at var i = index 1
	for (var i = 1; i < arrays2.length; i++) {
		if (arrays2[i] !== first) {
			return false;
		}
	}
	return true;
}

//sumArray() function that accepts an array of numbers and returns the sum of all numbers in the array.

function sumArray(arrays3) {
	//Make a variable to store the total.
	var sum = 0;
	for (var i = 0; i < arrays3.length; i++) {
		sum += arrays3[i]
		//print total
	}
	return sum;

}
//Max() returns the highest number within the array
function max(arrays4) {
	var high = arrays4[0];
	for (var i = 1; i < arrays4.length; i++) {
		if (arrays4[i] > high) {
			high = arrays4[i];
		}
	}
	return high;
}

// function nested inside another function to execute?!
// JS built in way of iterating over an array: ForEach
function myForEach(arr, func) {
	//loop through the array
	for (var i = 0; i < arr.length; i++) {
		//call func for each item in array
		func(arr[i]);
	}
}
