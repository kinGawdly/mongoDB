import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateVentaDto } from './dto/create-venta.dto';
import { VentaMapper } from './mapper/venta.mapper';
import { Venta } from './schemas/venta.schema';

@Injectable()
export class VentaService {
  constructor(
    @InjectModel(Venta.name)
    private ventaModel: Model<Venta>,
  ) {}
  async findAll() {
    return await this.ventaModel.find().populate('producto');
  }

  async create(venta: CreateVentaDto) {
    const resultado = VentaMapper.toSchema(venta);
    return await this.ventaModel.create(resultado);
  }
}
