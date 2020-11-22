import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './user.model';

@Entity()
export class Subtraction {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
  task: string;

  @Column('varchar')
  @IsNumber()
  @IsNotEmpty()
  value: number;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToOne(
    () => User,
    user => user.subtractions,
  )
  user: User;
}
