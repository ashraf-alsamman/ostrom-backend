import {
  Controller,
  Post,
  Body,
  Get,
  Put,
  Delete,
  Param,
} from '@nestjs/common';
import StudentDto from '../dto/student.dto';
import { StudentRepository } from './students.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Controller('students')
export class StudentsController {
  constructor(
    @InjectRepository(StudentRepository)
    private readonly studentRepository: StudentRepository,
  ) {}

  @Post()
  create(@Body() Dto: StudentDto) {
    return this.studentRepository.creatStudent(Dto);
  }

  @Get()
  findAll() {
    return this.studentRepository.findAllStudents();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentRepository.findOneStudent(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() Dto: StudentDto) {
    return this.studentRepository.updateStudent(id, Dto);
  }

  @Delete(':id')
  remove(@Param() params: { id: number }) {
    return this.studentRepository.removeStudent(params.id);
  }
}
