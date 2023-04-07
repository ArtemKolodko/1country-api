import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Web3 = require('web3');

@Injectable()
export class Web3Service {
  constructor(private configService: ConfigService) {}

  async getAddressBalance(address: string) {
    const web3 = new Web3(this.configService.get('web3.rpcUrl'));
    return await web3.eth.getBalance(address);
  }
}
