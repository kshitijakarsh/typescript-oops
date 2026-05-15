// write a program to work with transaction system of a bank.

class BankTransaction {
    private _transactions : { amount : number }[] = [];

    get transactions() {
        return this._transactions;
    }
    
    set transactions(value: { amount : number }[]) {
        this._transactions = value;
    }

    addTransaction(amount : number){
        this.transactions.push({ amount });
    }

    getTransactions(){
        return this.transactions;
    }
}

class crditCardTransaction extends BankTransaction {
    private cardNumber : string;

    constructor(cardNumber : string){
        super();
        this.cardNumber = cardNumber;
        console.log('Transaction Using Credit Card');
        console.log('Withdrawing amount : ', this.transactions);
        
    }

    getCardNumber(){
        return this.cardNumber;
    }
}

const transaction = new crditCardTransaction("1234-5678-9012-3456");
transaction.addTransaction(100);
transaction.addTransaction(200);
console.log(transaction.getTransactions()); // [ { amount: 100 }, { amount: 200 } ]
console.log(transaction.getCardNumber()); // 1234-5678-9012-3456