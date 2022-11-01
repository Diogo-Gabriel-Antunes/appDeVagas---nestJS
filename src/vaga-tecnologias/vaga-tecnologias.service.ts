import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateVagaTecnologiaDto } from './dto/create-vaga-tecnologia.dto';
import { UpdateVagaTecnologiaDto } from './dto/update-vaga-tecnologia.dto';
import { VagaTecnologia } from './entities/vaga-tecnologia.entity';

@Injectable()
export class VagaTecnologiasService {
  constructor(
    @InjectModel(VagaTecnologia)
    private vagaTecnologiaModel: typeof VagaTecnologia,
    private sequelize: Sequelize,
  ) {
    this.createMany();
  }
  async createMany() {
    try {
      const VagaTecnologia = await this.vagaTecnologiaModel.findAll();

      if (VagaTecnologia.length === 0) {
        await this.sequelize.transaction(async (x) => {
          const transactionHost = { transaction: x };

          await this.vagaTecnologiaModel.create(
            {
              vagaId: 4,
              tecnologiaId: 1,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 3,
              tecnologiaId: 3,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 3,
              tecnologiaId: 2,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 3,
              tecnologiaId: 1,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 2,
              tecnologiaId: 3,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 2,
              tecnologiaId: 2,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 2,
              tecnologiaId: 1,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 4,
              tecnologiaId: 3,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 4,
              tecnologiaId: 2,
            },
            transactionHost,
          );
          await this.vagaTecnologiaModel.create(
            {
              vagaId: 4,
              tecnologiaId: 4,
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
  create(createVagaTecnologiaDto: any) {
    return this.vagaTecnologiaModel.create(createVagaTecnologiaDto);
  }

  findAll() {
    return this.vagaTecnologiaModel.findAll();
  }

  findOne(id: number) {
    return this.vagaTecnologiaModel.findOne({ where: { id: id } });
  }

  update(id: number, updateVagaTecnologiaDto: UpdateVagaTecnologiaDto) {
    return this.vagaTecnologiaModel.update(updateVagaTecnologiaDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.vagaTecnologiaModel.destroy({ where: { id: id } });
  }
}
