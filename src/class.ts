class Device {
    name: string;
    brand: string;
    price: number;

    constructor(name: string, brand: string, price: number){
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
}

const mobile = new Device("Mobile", "Apple", 120000);
const laptop = new Device("Laptop", "HP", 80000);

console.log(mobile.brand);
console.log({Name: laptop.name, Brand: laptop.brand, Price: laptop.price})


// Another Way
class Animal {
    constructor(public name: string, public category: string){}
}

const dog = new Animal("Dog", "Dogish");
const cat = new Animal("Cat", "Catish");

console.log(dog.category);
console.log(cat.name);