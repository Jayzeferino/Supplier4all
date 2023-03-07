import { Controller,Post, Body, Res } from '@nestjs/common';
import { CreateIntegrationDto } from './dto/create-integration.dto';
import { CreateCostumer } from 'src/@core/domain/usecases/create-costumer/create-costumer';

@Controller('integration')
export class IntegrationController {
  // constructor(private readonly integrationService: IntegrationService) {}
  constructor( private createCostumer: CreateCostumer){

  }

  @Post('/hotmart')
  create(@Body() createIntegrationDto: CreateIntegrationDto ) {
    return "teste"
  }

}
