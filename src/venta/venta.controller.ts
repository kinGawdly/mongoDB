import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';
import { CreateVentaDto } from './dto/create-venta.dto';
import { VentaService } from './venta.service';

@Controller()
export class VentaController {
  constructor(private readonly ventaService: VentaService) {}

  @Get('listaVentas')
  async findAll() {
    const resultado = await this.ventaService.findAll();
    return resultado;
  }

  @Post('registrarVenta')
  @ApiBody({ type: CreateVentaDto, description: 'Datos de la venta a crear' })
  async create(@Body() createVentaDto: CreateVentaDto) {
    return await this.ventaService.create(createVentaDto);
  }
}
