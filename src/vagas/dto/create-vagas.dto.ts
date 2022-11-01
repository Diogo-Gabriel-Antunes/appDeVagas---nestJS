import { FloatDataType } from 'sequelize';

export class CreateVagasDto {
  tituloDaVaga: string;

  descricaoDaVaga: Text;

  faixaSalarial: number;

  localDaVaga: string;

  senioridade: string;

  tipoDaContratação: string;

  categoria: string;

  atividades: string;
}
