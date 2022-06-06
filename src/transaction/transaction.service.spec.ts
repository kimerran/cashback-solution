import { Test, TestingModule } from '@nestjs/testing';
import { TransactionService } from './transaction.service';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TransactionService],
    }).compile();

    service = module.get<TransactionService>(TransactionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', () => {
    const newService = service.create(new Date("2022-06-30"), "1")
    expect(newService).toBeDefined()
  })

  it('findAll', () => {
    service.create(new Date("2022-06-30"), "1")
    expect(service.findAll().length).toBe(1)
  })
});
