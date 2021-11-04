import { StudentEntity } from './student.entity';
import { EntityRepository, Repository } from 'typeorm';
import StudentDto from '../dto/student.dto';

@EntityRepository(StudentEntity)
export class StudentRepository extends Repository<StudentEntity> {
  findAllStudents = async () => {
    return this.find();
  };
  findOneStudent = async (id: string) => {
    return this.findOneOrFail(id);
  };

  creatStudent = async (Dto: StudentDto) => {
    return await this.save(Dto);
  };

  updateStudent = async (id: string, Dto: StudentDto) => {
    return this.save({ ...Dto, id: Number(id) });
  };

  removeStudent = async (id: number) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  };
}
