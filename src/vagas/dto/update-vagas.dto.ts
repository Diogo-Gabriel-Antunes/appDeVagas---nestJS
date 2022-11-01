import { PartialType } from '@nestjs/swagger';
import { FloatDataType } from 'sequelize';
import { CreateVagasDto } from './create-vagas.dto';

export class UpdateVagasDto extends PartialType(CreateVagasDto) {
  tituloDaVaga: string;

  descricaoDaVaga: Text;

  faixaSalarial: number;

  localDaVaga: string;

  senioridade: string;

  tipoDaContratação: string;

  categoria: string;

  atividades: string;
}
