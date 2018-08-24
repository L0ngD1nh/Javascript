var button = document.querySelector("button");
var body = document.querySelector("body");
var isPurple = false;

// version 1.0
//button.addEventListener("click", function () {
//	if (isPurple) {
//		body.style.background = "white";
//		isPurple = false;
//	} else {
//		body.style.background = "purple";
//		isPurple = true;
//	}
//});


//refactored version 2.0
//button.addEventListener("click", function () {
//	if (isPurple) {
//		body.style.background = "white";
//	} else {
//		body.style.background = "purple";
//	}
//	isPurple = !isPurple;
//});

// version 3.0

button.addEventListener("click", function () {
	body.classList.toggle("purple");
});
