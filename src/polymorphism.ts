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