// Instance of type guard
class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    willSleep(numberOfSleep: number) {
        console.log(`${this.name} doinik ${numberOfSleep} ghonta ghumai.`)
    }
}

class Student extends Person {
    constructor(name: string) {
        super(name);
    }
    doStudy(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} study kore.`)
    }
}

class Teacher extends Person {
    constructor(name: string) {
        super(name);
    }
    takeClass(numOfHours: number) {
        console.log(`${this.name} doinik ${numOfHours} class nei.`)
    }
}

// Function Guard
const isStudent = (user: Person) => {
    return user instanceof Student;
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const userInfo = (user: Person) => {
    if(isStudent(user)){
        user.doStudy(10);
    }else if(isTeacher(user)){
        user.takeClass(6);
    }else{
        user.willSleep(12);
    }
}

const student1 = new Student("Mr. Student1");
const teacher1 = new Teacher("Mr. teacher1");
const person1 = new Person("Mr. person1");

userInfo(student1);