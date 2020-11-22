import { Exclude } from 'class-transformer';
import { IsDate, IsEmail, IsNotEmpty, IsString, Length } from 'class-validator';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Statistics } from './statistics.model';
import { Subtraction } from './subtractions.model';

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

  @Exclude()
  @CreateDateColumn()
  @IsDate()
  createdAt: Date;
  @Exclude()
  @UpdateDateColumn()
  @IsDate()
  updatedAt: Date;

  @OneToOne(() => Statistics, {
    cascade: true,
  })
  @JoinColumn()
  statistics: Statistics;

  @OneToMany(
    () => Subtraction,
    subtraction => subtraction.user,
  )
  @JoinTable()
  subtractions: Subtraction[];
}
