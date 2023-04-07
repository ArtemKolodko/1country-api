import { Controller, Get, Param } from '@nestjs/common';
import { ApiOkResponse, ApiParam, ApiTags } from '@nestjs/swagger';
import { Web3Service } from './web3.service';

@ApiTags('web3')
@Controller('web3')
export class Web3Controller {
  constructor(private readonly web3Service: Web3Service) {}

  @Get('/balance/:address')
  @ApiParam({
    name: 'address',
    required: true,
    description: 'Harmony address, starting with 0x',
    schema: { oneOf: [{ type: 'string' }] },
  })
  @ApiOkResponse({
    type: String,
  })
  async getBalance(@Param('address') balance: string) {
    return await this.web3Service.getAddressBalance(balance);
  }
}
