class Counter1 {
    count: number = 0;

    increment() {
        return (this.count = this.count + 1);
    };

    decrement() {
        return (this.count = this.count - 1);
    }
}

const instance1 = new Counter1();
const instance2 = new Counter1();

console.log(instance1.increment())
console.log(instance1.increment())
console.log(instance1.increment())

console.log("====================")

console.log(instance2.decrement())
console.log(instance2.decrement())
console.log(instance2.decrement())



// Static
console.log("--- Here is Static ---")

class Counter2 {
    static count: number = 0;

    increment() {
        return (Counter2.count = Counter2.count + 1);
    };

    decrement() {
        return (Counter2.count = Counter2.count - 1);
    }
}

const instance3 = new Counter2();
const instance4 = new Counter2();

const instance5 = new Counter2();

console.log(instance3.increment())
console.log(instance3.increment())
console.log(instance3.increment())

console.log("====================")

// console.log(instance4.decrement())
// console.log(instance4.decrement())
// console.log(instance4.decrement())


console.log(instance5.increment())
console.log(instance5.increment())
console.log(instance5.increment())