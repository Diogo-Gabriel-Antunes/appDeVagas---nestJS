import { Module } from '@nestjs/common';
import { TecnologiasService } from './tecnologias.service';
import { TecnologiasController } from './tecnologias.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tecnologias } from './entities/tecnologias.entity';

@Module({
  imports: [SequelizeModule.forFeature([Tecnologias])],
  controllers: [TecnologiasController],
  providers: [TecnologiasService],
})
export class TecnologiasModule {}
