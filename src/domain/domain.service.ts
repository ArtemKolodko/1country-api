import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression, SchedulerRegistry } from '@nestjs/schedule';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { NFT } from '../interfaces/nft.interface';

@Injectable()
export class DomainService {
  private readonly logger = new Logger(DomainService.name);
  constructor(
    private schedulerRegistry: SchedulerRegistry,
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}

  private async getDomains() {
    const explorerApiUrl = this.configService.get('explorerApiUrl');
    const explorerApiKey = this.configService.get('explorerApiKey');
    const contractAddress = this.configService.get('nameWrapperAddress');
    const url = `${explorerApiUrl}/v0/shard/0/erc1155/token/${contractAddress}/assets`;
    const { data } = await firstValueFrom(
      this.httpService.get<NFT[]>(url, {
        headers: {
          rest_api_key: explorerApiKey,
        },
      }),
    );
    return data;
  }

  async updateDomains() {
    const domains = await this.getDomains();
    console.log('domains', domains[0]);
  }

  @Cron(CronExpression.EVERY_10_SECONDS, {
    name: 'tokens',
  })
  async handleCron() {
    const job = this.schedulerRegistry.getCronJob('tokens');
    job.stop();
    await this.updateDomains();
    job.start();
  }
}
