import { Module } from '@nestjs/common';
import { VagasService } from './vagas.service';
import { VagasController } from './vagas.controller';
import { Vagas } from './entities/vagas.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Tecnologias } from 'src/tecnologias/entities/tecnologias.entity';
import { VagaTecnologia } from 'src/vaga-tecnologias/entities/vaga-tecnologia.entity';

@Module({
  imports: [
    SequelizeModule.forFeature([Vagas]),
    SequelizeModule.forFeature([VagaTecnologia]),
  ],
  controllers: [VagasController],
  providers: [VagasService],
})
export class VagasModule {}
