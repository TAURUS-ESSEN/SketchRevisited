'use strict';
class Car {
    static count = 0;
    owner = "Eugen";
    constructor (brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        Car.count++;
    }
    getiInfo () {
        return `Марка: ${this.brand}, модель: ${this.model}, год: ${this.year}`
    }
    updateYear(newYear) {
        this.year = newYear;
    }
    
    static getCount() {
        return Car.count;
    }
    renameModel(newModel) {
        this.model = newModel;
    }
}
const car1 = new Car ("Brand1", "model1", 1999);
const car2 = new Car ("Brand2", "model2", 2024);
console.log(car1.getiInfo());
console.log(car2.getiInfo());

car1.updateYear(2021);
console.log(car1);
car2.renameModel("BMW");
console.log(car2);

const car3 = new Car ("Brand3", "model3", 2018);
console.log(Car.getCount());
console.log(car1.owner)