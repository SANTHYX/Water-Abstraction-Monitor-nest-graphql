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
  id: string;

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
  taskName: string;

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
