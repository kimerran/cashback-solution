import { Test, TestingModule } from '@nestjs/testing';
import { RulesetController } from '../ruleset/ruleset.controller';
import { RulesetService } from '../ruleset/ruleset.service';
import { TransactionController } from '../transaction/transaction.controller';
import { TransactionService } from '../transaction/transaction.service';
import { CashbackController } from './cashback.controller';
import { CashbackService } from './cashback.service';

import { CreateCashbackDto } from './dto/create-cashback.dto'
import { CreateTransactionDto } from '../transaction/dto/create-transaction.dto'

describe('CashbackController', () => {
  let controller: CashbackController;
  let transactionController: TransactionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CashbackController, RulesetController, TransactionController],
      providers: [RulesetService, TransactionService, CashbackService]
    }).compile();

    controller = module.get<CashbackController>(CashbackController);
    transactionController = module.get<TransactionController>(TransactionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create', () => {
    const newCashback: CreateCashbackDto = {
      startDate: new Date("2022-06-15"),
      endDate: new Date("2022-07-15"),
      amount: 1
    }
    const newCashbackReturn = controller.create(newCashback);
    expect(newCashbackReturn).toBeDefined()
  })

  it('findAll', () => {
    const newTx: CreateTransactionDto = {
      id: '1',
      date: new Date("2022-06-16")
    }
    const newCashback: CreateCashbackDto = {
      startDate: new Date("2022-06-15"),
      endDate: new Date("2022-07-15"),
      amount: 1
    }
    transactionController.create(newTx)
    controller.create(newCashback);
    expect(controller.findAll().length).toBe(1)
  })
});
