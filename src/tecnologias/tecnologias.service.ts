import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';
import { UpdateTecnologiaDto } from './dto/update-tecnologia.dto';
import { Tecnologias } from './entities/tecnologias.entity';

@Injectable()
export class TecnologiasService {
  constructor(
    @InjectModel(Tecnologias)
    private tecnologiasModel: typeof Tecnologias,
    private sequelize: Sequelize,
  ) {
    this.createMany();
  }
  async createMany() {
    try {
      const tecnologias = await this.tecnologiasModel.findAll();

      if (tecnologias.length === 0) {
        await this.sequelize.transaction(async (t) => {
          const transactionHost = { transaction: t };

          await this.tecnologiasModel.create(
            { tecnologia: 'React.JS' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'Javascript' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'Next.JS' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'Java' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'MYSQL' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'Ruby' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'Python' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'Node.JS' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'HTML5' },
            transactionHost,
          );
          await this.tecnologiasModel.create(
            { tecnologia: 'CSS3' },
            transactionHost,
          );
        });
      }
    } catch (err) {
      // Transaction has been rolled back
      // err is whatever rejected the promise chain returned to the transaction callback
    }
  }
  create(createTecnologiaDto: any) {
    return this.tecnologiasModel.create(createTecnologiaDto);
  }

  findAll() {
    return this.tecnologiasModel.findAll();
  }

  findOne(id: number) {
    return this.tecnologiasModel.findOne({ where: { id: id } });
  }

  update(id: number, updateTecnologiaDto: UpdateTecnologiaDto) {
    return this.tecnologiasModel.update(updateTecnologiaDto, {
      where: { id: id },
    });
  }

  remove(id: number) {
    return this.tecnologiasModel.destroy({ where: { id: id } });
  }
}
