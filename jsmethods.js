 var obj = {
 	name: "Long",
 	age: 45,
 	isCool: false,
 	friends: ["bob", "tina"],
 	// function thats a propeties inside an object
 	add: function (x, y) {
 		return x + y;
 	}
 }
 // to use the function inside the object
 //- obj.add(10,5); 
 //- = 15

 // First level of function
 function speak() {
 	return "woof";
 }

 function speak() {
 	return "meow";
 }
 // Second level of function - Methods to an object
 var dogSpace = {};
 dogSpace.speak = function () {
 	return "woof";
 }
 var catSpace = {};
 catSpace.speak = function () {
 	return "meow";
 }

 // Running the methods
 // dogSpace.speak() = "woof"
 // catSpace.speak() = "meow"
