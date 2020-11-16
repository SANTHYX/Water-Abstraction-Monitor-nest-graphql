import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString } from 'class-validator';
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Statistics } from './statistics.model';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  private id: number;

  @Column({ type: 'varchar', length: 30 })
  @IsString()
  @IsNotEmpty()
  private login: string;

  @Column({ type: 'varchar', length: 30 })
  @IsString()
  @IsNotEmpty()
  @Exclude()
  private password: string;

  @Column({ type: 'varchar', length: 25 })
  @IsEmail()
  @IsNotEmpty()
  private email: string;

  @Column('varchar')
  @IsString()
  @IsNotEmpty()
  private nationality: string;

  @Column('date')
  @IsDate()
  private createdAt: Date;

  @Column('date')
  @IsDate()
  private updatedAt: Date;

  @OneToOne(() => Statistics)
  @JoinColumn()
  private statistics: Statistics;

  constructor(
    login: string,
    password: string,
    email: string,
    nationality: string,
  ) {
    this.login = login;
    this.password = password;
    this.email = email;
    this.nationality = nationality;
    this.createdAt = this.updatedAt = new Date();
  }
}
