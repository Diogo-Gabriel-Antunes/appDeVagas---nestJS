import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { VagaTecnologia } from 'src/vaga-tecnologias/entities/vaga-tecnologia.entity';
import { CreateVagasDto } from './dto/create-vagas.dto';
import { UpdateVagasDto } from './dto/update-vagas.dto';
import { Vagas } from './entities/vagas.entity';

@Injectable()
export class VagasService {
  constructor(
    @InjectModel(Vagas)
    private vagasModel: typeof Vagas,

    private sequelize: Sequelize,
  ) {
    this.createMany();
  }
  async createMany() {
    try {
      const vagas = await this.vagasModel.findAll();

      if (vagas.length === 0) {
        await this.sequelize.transaction(async (x) => {
          const transactionHost = { transaction: x };

          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              faixaSalarial: 15000,
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
          await this.vagasModel.create(
            {
              tituloDaVaga: 'Desenvolvedor Fullstack',
              descricaoDaVaga: 'consumir apis e desenvolver telas',
              localDaVaga: 'remoto',
              senioridade: 'Junior/Pleno',
              tipoDaContratação: 'CLT',
              categoria: 'FullStack',
              faixaSalarial: 15000,
              atividades: 'consumir apis e desenvolver telas',
              empresaId: 1,
              ativo: true,
              TecnologiasId: [1, 2, 3],
            },
            transactionHost,
          );
        });
      }
    } catch (err) {
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    }
  }
  create(createVagasDto: any) {
    return this.vagasModel.create(createVagasDto);
  }

  findAll() {
    return this.vagasModel.findAll({
      order: [['id', 'DESC']],
      include: 'TecnologiasId',
    });
  }

  findOne(id: number) {
    return this.vagasModel.findOne({
      where: { id: id },
      include: 'TecnologiasId',
    });
  }

  update(id: number, updateVagasDto: UpdateVagasDto) {
    return this.vagasModel.update(updateVagasDto, { where: { id: id } });
  }

  remove(id: number) {
    return this.vagasModel.destroy({ where: { id: id } });
  }
}
