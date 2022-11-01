import { Test, TestingModule } from '@nestjs/testing';
import { TecnologiasController } from './tecnologias.controller';
import { TecnologiasService } from './tecnologias.service';

describe('TecnologiasController', () => {
  let controller: TecnologiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TecnologiasController],
      providers: [TecnologiasService],
    }).compile();

    controller = module.get<TecnologiasController>(TecnologiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
