import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Statistics } from './statistics.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Exclude()
  id: string;

  @Column({ type: 'varchar', length: 30 })
  @IsString()
  @IsNotEmpty()
  login: string;

  @Column({ type: 'varchar', length: 30 })
  @IsString()
  @IsNotEmpty()
  @Exclude()
  password: string;

  @Column({ type: 'varchar', length: 25 })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
  @Length(2, 3)
  nationality: string;

  @CreateDateColumn()
  @IsDate()
  createdAt: Date;

  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @OneToOne(() => Statistics, {
    cascade: true,
  })
  @JoinColumn()
  statistics: Statistics;
}
