import { Module } from '@nestjs/common';
import { StudentsController } from './students.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentRepository } from './students.repository';
import { StudentEntity } from './student.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StudentEntity, StudentRepository])],
  controllers: [StudentsController],
})
export class StudentsModule {}
