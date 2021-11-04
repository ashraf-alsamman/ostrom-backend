import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StudentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 20 })
  first_name: string;

  @Column({ length: 20 })
  last_name: string;

  @Column({ length: 40 })
  course: string;

  @Column()
  hours: number;

  @Column()
  price: number;

  @Column('date')
  birthday: Date;
}
