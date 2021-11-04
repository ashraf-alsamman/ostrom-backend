/* eslint-disable prettier/prettier */
import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { AppModule } from '../app.module';
 
describe('students', () => {

	let app: INestApplication;
	beforeAll(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule]
		}).compile();

		app = moduleFixture.createNestApplication();
		await app.init();
	});

	let id;
	const data = {
		"first_name": "ashraf",
		"last_name": "alsamman",
		"course": "java script",
		"hours": 2,
		"price": 1,
		"birthday": "2021-11-18"
	}

	it(`get all students`, () => {
		return request(app.getHttpServer()).get('/students')
			.expect(200);
	});

	it(`/add new student`, async () => {

		const response = await request(app.getHttpServer())
			.post('/students/')
			.set('Accept', 'application/json')
			.send(data)
			.expect(201);
		id = response.body.id;
	});

	it(`update student`, async () => {
		await request(app.getHttpServer())
			.delete('/students/' + id)
			.set('Accept', 'application/json')
			.send(data)
			.expect(200);
	});


	it(`delete student`, () => {
		request(app.getHttpServer())
			.delete('/students/' + id)
			.expect(200);
	});


	afterAll(async () => {
		await app.close();
	});
});