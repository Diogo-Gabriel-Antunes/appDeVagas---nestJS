import { Module } from '@nestjs/common';
import { VagaTecnologiasService } from './vaga-tecnologias.service';
import { VagaTecnologiasController } from './vaga-tecnologias.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { VagaTecnologia } from './entities/vaga-tecnologia.entity';

@Module({
  imports: [SequelizeModule.forFeature([VagaTecnologia])],
  controllers: [VagaTecnologiasController],
  providers: [VagaTecnologiasService],
})
export class VagaTecnologiasModule {}
