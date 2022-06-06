import { Test, TestingModule } from '@nestjs/testing';
import { RulesetController } from './ruleset.controller';
import { RulesetService } from './ruleset.service';
import { CreateRulesetDto } from './dto/create-ruleset.dto';

describe('RulesetController', () => {
  let controller: RulesetController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RulesetController],
      providers: [RulesetService]
    }).compile();

    controller = module.get<RulesetController>(RulesetController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('create', () => {
    const newRs: CreateRulesetDto = {
      startDate: new Date("2022-06-15"),
      endDate: new Date("2022-07-15"),
      cashback: 1,
      redemptionLimit: 10,
    }
    expect(controller.create(newRs)).toBeDefined();
  })

  it('findAll', () => {
    const newRs: CreateRulesetDto = {
      startDate: new Date("2022-06-15"),
      endDate: new Date("2022-07-15"),
      cashback: 1,
      redemptionLimit: 10,
    }
    controller.create(newRs);

    expect(controller.findAll().length).toBe(1);
  })
});
