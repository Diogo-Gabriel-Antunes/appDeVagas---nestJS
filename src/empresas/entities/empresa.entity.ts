import { Column, HasMany, Model, Table } from 'sequelize-typescript';
import { Vagas } from 'src/vagas/entities/vagas.entity';

@Table
export class Empresa extends Model {
  @Column({ allowNull: false })
  nomeDaEmpresa: string;
  @Column({ allowNull: false })
  CNPJ: string;
  @Column({ allowNull: false })
  numeroDeFuncionarios: number;
  @Column({ allowNull: false })
  endereco: string;
  @Column({ allowNull: false })
  emailCorporativo: string;
  @Column({ allowNull: false })
  gestorRH: string;
  @Column({ allowNull: false })
  DescricaoDaEmpresa: string;
  @HasMany(() => Vagas)
  vagas: Vagas[];
}
