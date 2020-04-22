import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface RequestDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  private balance: Balance[];

  constructor() {
    this.transactions = [];
    this.balance = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(type: string, value: 'income' | 'outcome'): Balance {
    const newBalance = this.balance;

    return newBalance;
  }

  public create({ title, type, value }: RequestDTO): Transaction {
    const transaction = new Transaction({ title, type, value });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
