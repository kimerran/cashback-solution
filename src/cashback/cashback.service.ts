import { Injectable } from '@nestjs/common';
import { Cashback } from './cashback.type';

@Injectable()
export class CashbackService {

    private _cashbacks: Array<Cashback> = new Array<Cashback>();
    create(startDate: Date, endDate: Date, amount: Number) {
        const newCashback: Cashback = {
            id: this._cashbacks.length + 1,
            startDate,
            endDate,
            amount,
        }
        this._cashbacks.push(newCashback)
        return newCashback;
    }

    findById(id: Number) {
        return this._cashbacks.filter(c => c.id === id).shift()
    }

    findAll() {
        return this._cashbacks;
    }

    findApplicableByDate(txDate: Date) {
        return this._cashbacks
        .filter(rs => {
            return rs.startDate <= txDate && rs.endDate >= txDate
        })
        .sort((a,b) => {
            return Number(b.amount) - Number(a.amount);
        })
        .shift()
    }
}
