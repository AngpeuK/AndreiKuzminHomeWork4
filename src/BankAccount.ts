class BankAccount {
    balance : number

    constructor(initialAmount: number) {
        this.balance = initialAmount
    }

    deposit(amount: number): void {
        this.balance = this.balance + amount
    }

    getBalance () {
        return this.balance
    }
}

const myAccount = new BankAccount(500)
myAccount.deposit(100) // After fixing: will print 600
console.log(myAccount.getBalance())
