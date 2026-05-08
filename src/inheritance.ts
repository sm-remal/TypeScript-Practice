class Student {
    name: string;
    age: number;
    designation: string;

    constructor(name: string, age: number, designation: string) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    getRead() {
        console.log(`The Student read more and more`);
    }
}

const student1 = new Student("Siam Ahmed", 24, "Student");

student1.getRead();


class Teacher {
    name: string;
    age: number;
    designation: string;

    constructor(name: string, age: number, designation: string) {
        this.name = name;
        this.age = age;
        this.designation = designation;
    }

    giveRead() {
        console.log(`The teacher pressurized the student`);
    }
}

const teacher1 = new Teacher("Ali Hossain", 32, "Lecturer")

teacher1.giveRead()