import {
  BelongsTo,
  BelongsToMany,
  ForeignKey,
  Model,
} from 'sequelize-typescript';
import { Column, HasMany, Table } from 'sequelize-typescript';
import { VagaTecnologia } from 'src/vaga-tecnologias/entities/vaga-tecnologia.entity';
import { Vagas } from 'src/vagas/entities/vagas.entity';

@Table
export class Tecnologias extends Model {
  @Column
  tecnologia: string;

  @BelongsToMany(() => Vagas, () => VagaTecnologia)
  vagaId: Vagas[];
}
