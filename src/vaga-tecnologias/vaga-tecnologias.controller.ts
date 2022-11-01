import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VagaTecnologiasService } from './vaga-tecnologias.service';
import { CreateVagaTecnologiaDto } from './dto/create-vaga-tecnologia.dto';
import { UpdateVagaTecnologiaDto } from './dto/update-vaga-tecnologia.dto';

@Controller('vaga-tecnologias')
export class VagaTecnologiasController {
  constructor(private readonly vagaTecnologiasService: VagaTecnologiasService) {}

  @Post()
  create(@Body() createVagaTecnologiaDto: CreateVagaTecnologiaDto) {
    return this.vagaTecnologiasService.create(createVagaTecnologiaDto);
  }

  @Get()
  findAll() {
    return this.vagaTecnologiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.vagaTecnologiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVagaTecnologiaDto: UpdateVagaTecnologiaDto) {
    return this.vagaTecnologiasService.update(+id, updateVagaTecnologiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.vagaTecnologiasService.remove(+id);
  }
}
