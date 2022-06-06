import { Body, Controller, Get, Post } from '@nestjs/common';
import { CashbackService } from 'src/cashback/cashback.service';
import { RulesetService } from 'src/ruleset/ruleset.service';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {

    constructor(
        private readonly transactionService: TransactionService,
    ) {}

    @Post("/")
    create(@Body() tx: CreateTransactionDto ) {
        this.transactionService.create(tx.date, tx.id);
    }




}
