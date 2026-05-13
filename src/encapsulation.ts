
// Access-Modifiers and Encapsulation both are same !!

class BankAccount {
    public userId: number;
    public userName: string;
    protected userBalance: number; //private

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    addBalance (newBalance: number) {
        return this.userBalance = this.userBalance + newBalance;
    }
}

class StudentAccount extends BankAccount {
    StudentBalance() {
        return this.userBalance;
    }
}

const balance = new BankAccount(121, "Siam", 20);
const studentBalance = new StudentAccount(122, "Rahim", 200);


console.log(balance.addBalance(140));
console.log(studentBalance.StudentBalance());

