import { Test, TestingModule } from '@nestjs/testing';
import { CashbackService } from './cashback.service';
import { Cashback } from './cashback.type';

describe('CashbackService', () => {
  let service: CashbackService;

  let mockCashback: any = {
    startDate: new Date("2022-06-15"),
    endDate: new Date("2022-07-15"),
    amount: 1
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CashbackService],
    }).compile();

    service = module.get<CashbackService>(CashbackService);
    service.create(mockCashback.startDate, mockCashback.endDate, mockCashback.amount);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findById', () => {
    const cb = service.findById(1)
    expect(cb).toBeDefined()
  })

  it('findAll', () => {
    const cbResults = service.findAll()
    expect(cbResults.length).toBe(1)
  })

  it('findApplicableByDate', () => {
    const cbResults = service.findApplicableByDate(new Date("2022-06-19"))
    expect(cbResults).toBeDefined()
  })

  it('findApplicableByDate - no match', () => {
    const cbResults = service.findApplicableByDate(new Date("2022-07-16"))
    expect(cbResults).toBeUndefined()
  })
});
