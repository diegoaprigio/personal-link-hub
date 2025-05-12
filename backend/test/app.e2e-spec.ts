import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { App } from 'supertest/types';
import { AppModule } from '../src/modules/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication<App>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/api/v1/healthcheck (GET)', () => {
    return request(app.getHttpServer())
      .get('/api/v1/healthcheck')
      .expect(200)
      .expect({
        status: HttpStatus.OK,
        message: 'Service is up and running!',
      });
  });
});
