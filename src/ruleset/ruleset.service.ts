import { Injectable } from '@nestjs/common';
import { Ruleset } from './ruleset.type'

@Injectable()
export class RulesetService {

    private _rulesets: Array<Ruleset> = new Array<Ruleset>();
    create(startDate: Date, endDate: Date, cashback: Number, redemptionLimit: Number) {
        const newRuleset: Ruleset = {
            id: this._rulesets.length + 1,
            startDate,
            endDate,
            cashback,
            redemptionLimit,
        }
        this._rulesets.push(newRuleset);
        return newRuleset;
    }

    findAll() {
        return this._rulesets;
    }

    /**
     * Returns the highest amount for applicable ruleset
     */
    findApplicableByDate(txDate: Date) {
        return this._rulesets
        .filter(rs => {
            return rs.startDate <= txDate && rs.endDate >= txDate
        })
        .sort((a,b) => {
            return Number(b.cashback) - Number(a.cashback);
        })
        .shift()
    }
}
