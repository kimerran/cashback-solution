import { Injectable } from '@nestjs/common';
import { CashbackService } from 'src/cashback/cashback.service';
import { RulesetService } from 'src/ruleset/ruleset.service';
import { Transaction } from './transaction.type';

@Injectable()
export class TransactionService {

    constructor(
    ) {}

    private _transactions: Array<Transaction> = new Array<Transaction>();
    create(date: Date, id: string) {
        const newTransaction: Transaction = {
            date,
            id,
        }
        this._transactions.push(newTransaction);
        return newTransaction;
    }

    findAll() {
        return this._transactions;
    }
}
