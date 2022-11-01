import {
  BelongsTo,
  BelongsToMany,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Tecnologias } from 'src/tecnologias/entities/tecnologias.entity';
import { Vagas } from 'src/vagas/entities/vagas.entity';

@Table
export class VagaTecnologia extends Model {
  @ForeignKey(() => Vagas)
  vagaId: Vagas;

  @ForeignKey(() => Tecnologias)
  tecnologiaId: Tecnologias;
}
