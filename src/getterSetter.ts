class bankAccount {
    userId: number;
    userName: string;
    userBalance: number;

    constructor (userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    set addBalance (balance: number) {
        this.userBalance = this.userBalance + balance;
    }

    get getBalance () {
        return this.userBalance;
    }
}

const result = new bankAccount(121, "Shah Mozzem Remal", 140)

result.addBalance = 50;
result.addBalance = 10;

console.log(result)
console.log(result.getBalance)