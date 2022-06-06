import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RulesetController } from './ruleset/ruleset.controller';
import { TransactionController } from './transaction/transaction.controller';
import { CashbackController } from './cashback/cashback.controller';
import { TransactionService } from './transaction/transaction.service';
import { RulesetService } from './ruleset/ruleset.service';
import { CashbackService } from './cashback/cashback.service';

@Module({
  imports: [],
  controllers: [AppController, RulesetController, TransactionController, CashbackController],
  providers: [AppService, TransactionService, RulesetService, CashbackService],
})
export class AppModule {}
