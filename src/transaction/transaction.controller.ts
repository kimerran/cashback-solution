import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { TransactionService } from './transaction.service';

@Controller('transaction')
export class TransactionController {

    constructor(
        private readonly transactionService: TransactionService,
    ) {}

    @Post("/")
    create(@Body() tx: CreateTransactionDto ) {
        return this.transactionService.create(tx.date, tx.id);
    }
}
