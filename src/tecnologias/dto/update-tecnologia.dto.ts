import { PartialType } from '@nestjs/swagger';
import { CreateTecnologiaDto } from './create-tecnologia.dto';

export class UpdateTecnologiaDto extends PartialType(CreateTecnologiaDto) {}
