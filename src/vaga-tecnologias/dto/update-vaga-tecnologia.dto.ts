import { PartialType } from '@nestjs/swagger';
import { CreateVagaTecnologiaDto } from './create-vaga-tecnologia.dto';

export class UpdateVagaTecnologiaDto extends PartialType(CreateVagaTecnologiaDto) {}
