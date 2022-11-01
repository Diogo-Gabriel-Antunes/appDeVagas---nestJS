import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TecnologiasService } from './tecnologias.service';
import { CreateTecnologiaDto } from './dto/create-tecnologia.dto';
import { UpdateTecnologiaDto } from './dto/update-tecnologia.dto';

@Controller('tecnologias')
export class TecnologiasController {
  constructor(private readonly tecnologiasService: TecnologiasService) {}

  @Post()
  create(@Body() createTecnologiaDto: CreateTecnologiaDto) {
    return this.tecnologiasService.create(createTecnologiaDto);
  }

  @Get()
  findAll() {
    return this.tecnologiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tecnologiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTecnologiaDto: UpdateTecnologiaDto) {
    return this.tecnologiasService.update(+id, updateTecnologiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tecnologiasService.remove(+id);
  }
}
