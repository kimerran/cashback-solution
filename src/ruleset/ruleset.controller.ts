import { Body, Controller, Get, Param, Post } from '@nestjs/common';


import { CreateRulesetDto } from './dto/create-ruleset.dto'
import { RulesetService } from './ruleset.service';
@Controller('ruleset')
export class RulesetController {

    constructor(private readonly rulesetService: RulesetService) {}

    @Post("/")
    create(@Body() rs: CreateRulesetDto) {
        return this.rulesetService.create(rs.startDate, rs.endDate, rs.cashback, rs.redemptionLimit);
    }

    @Get("/")
    findAll() {
        return this.rulesetService.findAll()
    }

    // @Get("/:id")
    // findById(@Param('id') id: Number) {
    //     return this.rulesetService.findById(id)
    // }
}
