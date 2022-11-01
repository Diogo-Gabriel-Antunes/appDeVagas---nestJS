import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Sequelize } from 'sequelize-typescript';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectModel(Empresa)
    private empresaModel: typeof Empresa,
    private sequelize: Sequelize,
  ) {
    this.createMany();
  }
  async createMany() {
    try {
      const empresas = await this.empresaModel.findAll();

      if (empresas.length === 0) {
        await this.sequelize.transaction(async (x) => {
          const transactionHost = { transaction: x };

          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
              vagas: null,
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
            },
            transactionHost,
          );
          await this.empresaModel.create(
            {
              nomeDaEmpresa: 'TOTVS',
              CNPJ: '111.111.111-11',
              numeroDeFuncionarios: 500,
              endereco: 'Joinville,SC',
              emailCorporativo: 'totvs@totvs.com.br',
              gestorRH: 'Andrei',
              DescricaoDaEmpresa: 'Otima empresa para se trabalhar',
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
  create(createEmpresaDto: any) {
    return this.empresaModel.create(createEmpresaDto);
  }

  findAll() {
    return this.empresaModel.findAll();
  }

  findOne(id: number) {
    return this.empresaModel.findOne({ where: { id: id } });
  }

  update(id: number, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaModel.update(updateEmpresaDto, { where: { id: id } });
  }

  remove(id: number) {
    return this.empresaModel.destroy({ where: { id: id } });
  }
}
