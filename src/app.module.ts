import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasModule } from './empresas/empresas.module';
import { Empresa } from './empresas/entities/empresa.entity';
import { VagasModule } from './vagas/vagas.module';
import { TecnologiasModule } from './tecnologias/tecnologias.module';
import { Vagas } from './vagas/entities/vagas.entity';
import { VagaTecnologiasModule } from './vaga-tecnologias/vaga-tecnologias.module';
import { Tecnologias } from './tecnologias/entities/tecnologias.entity';
import { VagaTecnologia } from './vaga-tecnologias/entities/vaga-tecnologia.entity';
import { CandidatosModule } from './candidatos/candidatos.module';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'diogo123',
      database: 'apiDeVagas',
      models: [Empresa, Vagas, Tecnologias, VagaTecnologia],
      autoLoadModels: true,
      synchronize: true,
    }),
    EmpresasModule,
    VagasModule,
    TecnologiasModule,
    VagaTecnologiasModule,
    CandidatosModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
