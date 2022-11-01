import { FloatDataType, TextDataType } from 'sequelize';
import {
  BelongsTo,
  BelongsToMany,
  Column,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Empresa } from 'src/empresas/entities/empresa.entity';
import { Tecnologias } from 'src/tecnologias/entities/tecnologias.entity';
import { VagaTecnologia } from 'src/vaga-tecnologias/entities/vaga-tecnologia.entity';

@Table
export class Vagas extends Model {
  @Column({ allowNull: false })
  tituloDaVaga: string;
  @Column({ allowNull: false, type: 'text' })
  descricaoDaVaga: string;
  @Column({ allowNull: false })
  faixaSalarial: number;
  @Column({ allowNull: false })
  localDaVaga: string;
  @Column({ allowNull: false })
  senioridade: string;
  @Column({ allowNull: false })
  tipoDaContratação: string;
  @Column({ allowNull: false })
  categoria: string;
  @Column({ allowNull: false })
  atividades: string;
  @ForeignKey(() => Empresa)
  empresaId: Empresa;
  @Column({ allowNull: false })
  ativo: boolean;
  @BelongsToMany(() => Tecnologias, () => VagaTecnologia)
  TecnologiasId: Tecnologias[];
}
