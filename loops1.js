//Print all numbers between -10 and 19; Only while loops
console.log("Numbers between -10 and 19");
var x = -10;
while (x <= 19) {
    console.log(x);
    x++;
}
//Print all even numbers between 10 and 40; Only while loops
console.log("Even numbers between 10 and 40");
var y = 10;
while (y <= 40) {
    if (y % 2 === 0) {
        console.log(y);
    }
    y += 1;
}
//Print all odd numbers between 300 and 333
console.log("Odd numbers between 300 and 333");
var i = 300;
while (i <= 333) {
    if (i % 2 !== 0) {
        console.log(i);
    }
    i += 1;
}
//Print all numbers divisible by 5 and 3 between 5 and 50
console.log("Disvisible by 5 and 3 between 5 and 50");
var count = 5;
while (count <= 50) {
    if (count % 5 === 0 && count % 3 === 0) {
        console.log(count);
    }
    count += 1;
}
