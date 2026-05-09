class Person {
    name: string;
    age: number;
    designation: string;

    constructor(name: string, age: number, designation: string) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    getRead(valueOfHours: number) {
        console.log(`The Student read more and more, at least ${valueOfHours} hours`);
    }
}



class Student extends Person {

}

const student1 = new Student("Siam Ahmed", 24, "Student");

student1.getRead(12);


class Teacher extends Person {
    
    experience: string;

    constructor(name: string, age: number, designation: string, experience: string) {

        super(name, age, designation);

        this.experience = experience;
    }

    giveRead(valueOfHours: number) {
        console.log(`The teacher pressurized the student to read ${valueOfHours} hours.`);
    }
}

const teacher1 = new Teacher("Ali Hossain", 32, "Lecturer", "8+ Years")

teacher1.giveRead(16)