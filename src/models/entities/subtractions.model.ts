import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Subtraction {
  @PrimaryGeneratedColumn('uuid')
  id: string;
}
