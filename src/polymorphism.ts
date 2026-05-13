class Person {
    getSleep(): string {
        return `The person sleep for 10 hours.`
    }
}

class Student extends Person {
    getSleep(): string {
        return `The student sleep for 8 hours.`
    }
}

class NextLevelDeveloper extends Person {
    getSleep(): string {
        return `The developer sleep for 6 hours.`
    }
}

// Function 
const getSleepingHours = (param: Person): string => {
    return param.getSleep();
}



const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

console.log(getSleepingHours(person3))


class Shape {
    getArea(): number {
        return 0;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}

class Rectangle extends Shape {

    height: number;
    width: number;

    constructor(height: number, width: number) {

        super();

        this.height = height;
        this.width = width;
    }
    getArea(): number {
        return this.height * this.width;
    }
}

const gettingArea = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

gettingArea(shape3);