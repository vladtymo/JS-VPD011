// -=-=-=-=-=-=-=-=- objects -=-=-=-=-=-=-=-=-
var obj = new Object();
var obj = {};

// 1 - property access using object['key']
var product = {};
product["name"] = "Ball";
product['size'] = 20.5;
product['price'] = 420;
product['type'] = "mini-football";

product["name"] = "Football"; // override

alert(product['name']);
alert(product['size']);
alert(product['type']);
alert(product['color']);

// 2 - property access using object.key
var student = {};
student.name = "Vova";
student.age = 30;

student['Average Mark'] = 7.8; // allows white-space characters
student.averageMark = 7.8;

// delete property of object
delete student.averageMark;

student.address = "Leemontova 45b";

if ('address' in student) {
    alert(student.address);
}
else {
    alert("Student has not an address!");
}

// view all properties
for (var property in student) {
    alert(property + ": " + student[property]);
}

// create object with properties initialization
var car = {
    model: "X",
    power: 250,
    color: "Dark Blue",
    year: 2018
};

var res = "\tCar info:\n";
for (var property in car) {
    res += property + ": " + car[property] + '\n';
}
alert(res);

// inner objects
let person = {
    firstName: "Bob",
    lastName: "Bobovich",
    birthdate: 2010,
    address: {
        street: "Soborna",
        city: "Rivne",
        building: "5a"
    },
    cars: ["Nissan Primera", "Ford Focus", "Toyota Avensise"]
};

alert(`Address: ${person.address.street} ${person.address.building}, ${person.address.city}`);

// TODO: get all properties recursovely

// function with object
function addCarToPerson(person, newCar) {
    person.cars.push(newCar);
}
function showAllCars(person) {
    alert("Cars: " + person.cars);
}

addCarToPerson(person, "Tesla Roadster");
showAllCars(person);

// object with methods
const player = {
    login: "super_user123",
    password: "Qwerty",
    email: "bablafra@gmail.com",
    score: 0,

    print: function () {
        console.log(`User: ${this.login} with score: ${this.score}`);
    },
    increaseScore(value) {
        this.score += value;
    }
};

player.print();
player.increaseScore(2);
player.print();

// constructor functions
function Rectangle(width, heigth) {
    this.width = width;
    this.heigth = heigth;
    this.square = width * heigth;
    this.perimeter = width * 2 + heigth * 2;
};

let rect = new Rectangle(20, 12);
alert(`Square: ${rect.square} cm^2`);