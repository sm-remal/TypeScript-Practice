const addNumber1 = (num1: number, num2: number) : number => {
    return num1 + num2;
}

console.log(addNumber1(2, 2))

// For Guard
const addNumber = (num1: number | string, num2: number | string) => {
    if(typeof num1 === "number" && num2 === "number") {
        console.log(num1 + num2)
    }else{
        const result = num1.toString() + num2.toString();
        console.log(result);
    }
}

addNumber(2, '2')


// Guard with type
type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: string;
}

const getUser = (user: NormalUser | AdminUser) => {
    if("role" in user) {
        console.log(`${user.name}, his role is ${user.role}`)
    }else{
        console.log(user.name)
    }
}

getUser({name: "Shah Mozzem Remal", role: "Admin"})