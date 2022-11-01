import { PartialType } from '@nestjs/swagger';
import { CreateEmpresaDto } from './create-empresa.dto';

export class UpdateEmpresaDto extends PartialType(CreateEmpresaDto) {
  nomeDaEmpresa: string;

  CPNJ: string;

  numeroDeFuncionarios: number;

  endereco: string;

  emailCorporativo: string;

  gestorRH: string;

  DescricaoDaEmpresa: string;
}
