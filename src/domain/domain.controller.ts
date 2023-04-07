import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('domain')
@Controller('domain')
export class DomainController {
  @Get('/test')
  async testMethod() {
    return 1;
  }
}
