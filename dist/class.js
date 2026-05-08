"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Device {
    name;
    brand;
    price;
    constructor(name, brand, price) {
        this.name = name;
        this.brand = brand;
        this.price = price;
    }
}
const mobile = new Device("Mobile", "Apple", 120000);
console.log(mobile.brand);
//# sourceMappingURL=class.js.map