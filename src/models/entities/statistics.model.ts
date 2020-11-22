import { Exclude } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Statistics {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column('float')
  @IsNumber()
  @IsNotEmpty()
  avgSubtraction: number;

  @Exclude()
  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @Exclude()
  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
