import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { IsObject, IsString } from 'class-validator';

@Entity({ name: 'user_profile' })
export class UserProfileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty()
  @IsString()
  @Column({
    type: 'varchar',
  })
  domainName: string;

  @ApiProperty()
  @IsObject()
  @Column({
    type: 'simple-json',
    nullable: false,
    default: {},
  })
  params: any;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
