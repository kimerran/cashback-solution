import { Body, Controller, Post, Get, Param } from '@nestjs/common';
import { RulesetService } from '../ruleset/ruleset.service';
import { TransactionService } from '../transaction/transaction.service';
import { CashbackService } from './cashback.service';
import { CreateCashbackDto } from './dto/create-cashback.dto';

class CashbackApplied {
    public readonly transactionId: string;
    public readonly amount: Number;
}

@Controller('cashback')
export class CashbackController {
    constructor(
        private readonly cashbackService: CashbackService,
        private readonly transactionService: TransactionService,
        private readonly rulesetService: RulesetService
    ) {}

    @Post("/")
    create(@Body() cb: CreateCashbackDto) {
        return this.cashbackService.create(cb.startDate, cb.endDate, cb.amount);
    }

    @Get("/")
    findAll() {
        // navigate transactions and find applicable cashback / transactions
        const transactions = this.transactionService.findAll()
        let transactionMatches: Array<CashbackApplied> = new Array<CashbackApplied>();

        transactions.forEach(tx => {
            const matchRs = this.rulesetService.findApplicableByDate(tx.date)
            const matchCb = this.cashbackService.findApplicableByDate(tx.date)

            const bestRs = (matchRs) ? matchRs.cashback : 0;
            const bestCb = (matchCb) ? matchCb.amount : 0;

            const highest = (bestRs > bestCb) ? bestRs : bestCb;

            if (highest > 0) {
                transactionMatches.push({
                    transactionId: tx.id,
                    amount: highest
                })
            }

        })

        return transactionMatches;
    }
}
