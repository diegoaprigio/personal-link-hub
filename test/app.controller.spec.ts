import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from '../src/controllers/app.controller';
import { AppService } from '../src/services/app.service';
import { HttpStatus } from '@nestjs/common';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('Should check if the service is up and running"', () => {
      expect(appController.getHealthcheck()).toBe({
        status: HttpStatus.OK,
        message: 'Service is up and running!',
      });
    });
  });
});
