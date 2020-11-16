import { IsDate, IsNotEmpty, IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Statistics {
  @PrimaryGeneratedColumn('uuid')
  private id: number;

  @Column('float')
  @IsNumber()
  @IsNotEmpty()
  private actuallAverageSubtraction: number;

  @Column('date')
  @IsDate()
  private createdAt: Date;

  @Column('date')
  @IsDate()
  private updatedAt: Date;

  constructor(actuallAverageSubtraction: number) {
    this.actuallAverageSubtraction = actuallAverageSubtraction;
    this.createdAt = this.updatedAt = new Date();
  }
}
