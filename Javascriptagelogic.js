var age = Number(prompt("what is your age?"));
if (age < 0) {
    console.log("error");
}
if (age === 21) {
    console.log("happy 21st bbirthday!!");
}
if (age % 2 !== 0) {
    console.log("Your age is odd!");
}
if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect square!");
}
