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
  id: string;

  @Column('float')
  @IsNumber()
  @IsNotEmpty()
  avgSubtraction: number;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;
}
