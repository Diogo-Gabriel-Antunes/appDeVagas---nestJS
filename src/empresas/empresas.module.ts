import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Empresa } from './entities/empresa.entity';

@Module({
  imports: [SequelizeModule.forFeature([Empresa])],
  controllers: [EmpresasController],
  providers: [EmpresasService],
})
export class EmpresasModule {}
