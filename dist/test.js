"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Shah Mozzem Remal";
console.log(name);
// OPP
class Person {
    name;
    age;
    skill;
    constructor(name, age, skill) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}
const newObject = new Person("Shah Mozzem Remal", 23, "Software Engineer");
console.log({ Age: newObject.age }, { Name: newObject.name }, { Skill: newObject.skill });
// Another Way
class Device {
    category;
    brand;
    color;
    price;
    isReal;
    constructor(category, brand, color, price, isReal) {
        this.category = category;
        this.brand = brand;
        this.color = color;
        this.price = price;
        this.isReal = isReal;
    }
    ;
}
const result = new Device("Laptop", "HP", "Black", 180000, true);
console.log(result.category, result.brand, result.color, result.isReal, result.price);
//# sourceMappingURL=test.js.map