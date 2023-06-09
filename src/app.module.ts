import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config';
import { Web3Module } from './web3/web3.module';
import entities from './typeorm';
import { Web3Service } from './web3/web3.service';
import { Web3Controller } from './web3/web3.controller';
import { HttpModule } from '@nestjs/axios';
import { DomainModule } from './domain/domain.module';
import { DomainController } from './domain/domain.controller';
import { DomainService } from './domain/domain.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USERNAME'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        entities: entities,
        synchronize: true,
      }),
      inject: [ConfigService],
    }),
    Web3Module,
    HttpModule,
    ScheduleModule.forRoot(),
    DomainModule,
  ],
  controllers: [AppController, Web3Controller, DomainController],
  providers: [AppService, Web3Service, DomainService],
})
export class AppModule {}
