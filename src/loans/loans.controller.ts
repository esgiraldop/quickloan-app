import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { LoansService } from './loans.service';

@Controller('loans')
export class LoansController {

    constructor(private readonly loansService: LoansService){}

    @Post()
    createLoan(@Body() createLoanDto: any){
        return `loan created for ${createLoanDto.userId}`;
    }

    @Get(':id')
    getLoanStatus(@Param('id') id:string){
        return `Status of loan ${id}`
    }
}