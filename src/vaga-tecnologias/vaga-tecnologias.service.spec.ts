import { Test, TestingModule } from '@nestjs/testing';
import { VagaTecnologiasService } from './vaga-tecnologias.service';

describe('VagaTecnologiasService', () => {
  let service: VagaTecnologiasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VagaTecnologiasService],
    }).compile();

    service = module.get<VagaTecnologiasService>(VagaTecnologiasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
