// -=-=-=-=-=-=-=-=- console -=-=-=-=-=-=-=-=-
console.log("Hello JavaScript!");
console.warn("Some warning!");
console.error("Some error!");

// -=-=-=-=-=-=-=-=- data types -=-=-=-=-=-=-=-=-

let number = 10;
let koef = 2.5;
let login = "super123";
let letter = "A";
let flag = true;
// let func = function (a, b) {
//     return a + b;
// }
let func = (a, b) => console.log(`${a} + ${b} = ${a + b}`);

// invoke function
func(4, 5);

console.log(`Number = ${number}, type: ${typeof (number)}`);
console.log(`Koef = ${koef}, type: ${typeof (koef)}`);
console.log(`Login = ${login}, type: ${typeof (login)}`);
console.log(`Letter = ${letter}, type: ${typeof (letter)}`);
console.log(`Flag = ${flag}, type: ${typeof (flag)}`);
console.log(`Func = ${func}, type: ${typeof (func)}`);

// -=-=-=-=-=-=-=-=- dynamic typing -=-=-=-=-=-=-=-=-

let value = 10;
value = "hello";
value = [1, 5, 10, 130, -5, 5.8, 3.3, "red", "green", 0, [1, 2, 3], func, false, true];

// invoke function
value[11](3, 4);

console.log(`Value = ${value}, type: ${typeof (value)}`);

// -=-=-=-=-=-=-=-=- browser dialogs -=-=-=-=-=-=-=-=-

alert("Some message!");

let username = prompt("Enter your name:");
console.log(`Value = ${username}, type: ${typeof (username)}`);
console.log(`Hi dear ${username}!`);

// +{variable} - convert string to number
let year = +prompt("Enter current year: ");

console.log(`Year = ${year}, type: ${typeof (year)}`);
console.log(`Next year: ${year + 1}`);

let isYes = confirm("Do you want to continue?");
console.log(`Answer: ${isYes ? "Yes" : "No"}`);

// -=-=-=-=-=-=-=-=- logic statements -=-=-=-=-=-=-=-=-
if (5 > 0) {
    console.log("Bigger");
}
else console.log("Less");

let result = (10 > 5) ? "Good" : "Bad";

// -=-=-=-=-=-=-=-=- cycles -=-=-=-=-=-=-=-=-
let array = [1, 3, 6, 3, 10, 33, 7];

for (let i = 0; i < array.length; i++) {
    console.log(`Element [${i}] = ${array[i]}`);
}
array.forEach(element => {
    console.log(`Element = ${element}`);
});
for (const key in array) {
    console.log(key);
}
for (const value of array) {
    console.log(value);
}

// -=-=-=-=-=-=-=-=- functions -=-=-=-=-=-=-=-=-

// function declaration
function showMessage(text) {
    console.log("Your message: " + text);
}

showMessage("hello functions on JS!");

// function expression
const mult = function (a, b) { return a * b; }
// arrow function
const div = (a, b) => a / b;

console.log("Multiple of 3 * 5 = " + mult(3, 5));