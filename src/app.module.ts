import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentEntity } from './students/student.entity';
import config from './config';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: config.host,
      port: config.port,
      username: config.username,
      password: config.password,
      database: config.database,
      entities: [StudentEntity],
      synchronize: true,
    }),
    StudentsModule,
  ],

  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
