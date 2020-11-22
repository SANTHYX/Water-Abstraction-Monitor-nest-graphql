import { Exclude } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {
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

  @IsString()
  @IsNotEmpty()
  task: string;

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
