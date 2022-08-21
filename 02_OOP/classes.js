// -=-=-=-=-=-=-=-=- Claases -=-=-=-=-=-=-=-=-
class Car {
    constructor(model, color, power, price) {
        this.model = model;
        this.color = color;
        this.power = power;
        this._price = price;
    }

    show() {
        console.log(`Car - model: ${this.model} ${this.color} ${this._price}$`);
    }

    set price(newPrice) {
        if (newPrice >= 0)
            this._price = newPrice;
    }
    get kilowats() {
        return this.power * 0.7457;
    }
}

const myCar = new Car("Nissan Note", "Dark Blue", 86, 7000);
const yourCar = new Car("Toyota Prius", "White", 120, 9400);

myCar.price = 8100;
myCar.price = -10; // ignore changes
myCar.show();

console.log(`Kilowats: ${myCar.kilowats} kW`);

// -=-=-=-=-=-=-=-=- Extends -=-=-=-=-=-=-=-=-
class PoliceCar extends Car {
    constructor(model, color, power, price, volume) {
        super(model, color, power, price);
        this._volume = volume;
    }

    show() {
        console.log(`Police car - model: ${this.model} ${this.color} ${this._price}$`);
    }

    beep() {
        console.log(`Beep with ${this._volume} volume...`);
    }
}

const policeCar1 = new PoliceCar("BMW M5", "Black", 430, 55000, 8);

policeCar1.beep();