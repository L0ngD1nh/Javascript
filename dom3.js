// selecting Google IMG and change it to something else 
// store google's ID img into variable logo
var logo = document.querySelector("hplogo");
// load google logo to a new image 
logo.setAttribute("src", " new img. jpeg");

// change width or any attributes of an image in JS

logo.style.width = "500px";
logo.style.height = "200px";
logo.style.border = "2px solid pink";

// selecting a bunch of tag at once to  change its attribute
// setAttribute only exist on individual elements
var links = document.getElementsByTagName("a");
// loop through all the A tags
for (var i = 0; i < links.length; i++) {
	console.log(links[i].textContent);
}
// loop through all the a tags and change the background
for (var i = 0; i < links.length; i++) {
	links[i].style.background = "pink";
}
// loop through all the a tags and change the border and color text
for (var i = 0; i < links.length; i++) {
	links[i].style.border = "1px dashed purple";
	links[i].style.color = "orange";
}
// get a list of all the href links
for (var i = 0; i < links.length; i++) {
	console.log(links[i].getAttribute("href"));
}
// change all href to bing
for (var i = 0; i < links.length; i++) {
	links[i].setAttribute("href", "http://www.bing.com");
}
