const name: string = "Shah Mozzem Remal";
console.log(name);


// OPP
class Person {
    name: string;
    age: number;
    skill: string;

    constructor(name: string, age: number, skill: string) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
}

const newObject = new Person("Shah Mozzem Remal", 23, "Software Engineer");

console.log({ Age: newObject.age }, { Name: newObject.name }, { Skill: newObject.skill });

// Another Way
class Device {
    constructor(public category: string, public brand: string, public color: string,public price: number,public isReal: boolean) { };
}

const result = new Device("Laptop", "HP", "Black", 180000, true);

console.log(result.category, result.brand, result.color, result.isReal, result.price )