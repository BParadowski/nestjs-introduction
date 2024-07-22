import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { CatsService } from './app.service';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [CatsService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should return new cat creation message', () => {
      expect(
        appController.addCat({ name: 'hankua', age: 4, breed: 'BdoncaDonc' }),
      ).toBe(
        "You've just added a kitten to out collection! Name: hankua Age: 4",
      );
    });
  });
});
