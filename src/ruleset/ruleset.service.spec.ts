import { Test, TestingModule } from '@nestjs/testing';
import { RulesetService } from './ruleset.service';

describe('RulesetService', () => {
  let service: RulesetService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RulesetService],
    }).compile();

    service = module.get<RulesetService>(RulesetService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create', () => {
    const rs = service.create(new Date("2022-06-15"), new Date("2022-07-10"), 2, 10);
    expect(rs).toBeDefined()
  })

  it('findAll', () => {
    const rs = service.create(new Date("2022-06-15"), new Date("2022-07-10"), 2, 10);
    expect(service.findAll().length).toBe(1)
  })

  it('findAll', () => {
    service.create(new Date("2022-06-15"), new Date("2022-07-10"), 2, 10);
    const match = service.findApplicableByDate(new Date("2022-06-30"));
    expect(match).toBeDefined()
  })
});
