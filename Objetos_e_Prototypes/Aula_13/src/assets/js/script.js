//Superclasse Vehicle
function Vehicle(make, model, year, fuelType, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;

    Object.defineProperty(this, `fuelType`, {//atributo privado
        value: fuelType,
        writable: true,
        enumerable: false,
        configurable: false,
    });

    Object.defineProperties(this, {
        mileage: {
            get: () => mileage,
            set: (value) => { value > mileage ? mileage = value : mileage },
            enumerable: true,
            configurable: false,
        },
        displayFuelType: {
            get: function () { return this.fuelType },//nunca utilizar método writable quando se utiliza get
            enumerable: true,
            configurable: false,
        }
    });
}

Vehicle.prototype.displayInfo = function () {
    return console.log(`Fabricante : ${this.make}\nModelo : ${this.model}\nAno : ${this.year}`)
}
Vehicle.prototype.calculateConsumption = function (travelledDistance, usedFuel) {
    const result = travelledDistance / usedFuel;
    console.log(`${result}Km/l`)
}
Vehicle.prototype.upgradeYear = function () {
    this.year++
}

function Car(make, model, year, fuelType, mileage, numDoors) {
    Vehicle.call(this, make, model, year, fuelType, mileage);
    this.numDoors = numDoors;
}
Car.prototype = Vehicle.prototype;
Car.prototype.constructor = Car;
Car.prototype.displayInfo = function () {
    console.log(`Fabricante : ${this.make}\nModelo : ${this.model}\nAno : ${this.year}\nQuantidade de portas: ${this.numDoors}`)
};

function ElectricCar(make, model, year, fuelType, mileage, numDoors, batteryCapacity) {
    Car.call(this, make, model, year, fuelType, mileage, numDoors);
    this.batteryCapacity = batteryCapacity;
}
ElectricCar.prototype = Car.prototype;
ElectricCar.prototype.constructor = ElectricCar;

ElectricCar.prototype.calculateConsumption = function (travelledDistance, kWhUsed) {
    const result = travelledDistance / kWhUsed;
    console.log(`${result}Km/kWh`)
}


function createMotorcycle(make, model, year, fuelType, mileage, color) {
    const motorcycle = new Vehicle(make, model, year, fuelType, mileage);
    motorcycle.color = color;
    return motorcycle;
}



const corsa = new Car(`Chevrolet`, `Corsa`, 2007, `Gasolina`, 2000, 4);
corsa.displayInfo();
corsa.calculateConsumption(40, 10);

console.log(`\n`);
const model3 = new ElectricCar(`Tesla`, `Model 3`, 2016, `Níquel`, 3000, 4, 80);
model3.displayInfo();
model3.calculateConsumption(40, 2)

console.log(`\n`);
const motorcycle = createMotorcycle(`Harley Davidson`, `Fat Bob`, 2022, 'Gasolina', 500, 'Black');
motorcycle.displayInfo()
