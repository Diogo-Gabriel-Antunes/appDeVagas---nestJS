import { Test, TestingModule } from '@nestjs/testing';
import { VagaTecnologiasController } from './vaga-tecnologias.controller';
import { VagaTecnologiasService } from './vaga-tecnologias.service';

describe('VagaTecnologiasController', () => {
  let controller: VagaTecnologiasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VagaTecnologiasController],
      providers: [VagaTecnologiasService],
    }).compile();

    controller = module.get<VagaTecnologiasController>(VagaTecnologiasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
