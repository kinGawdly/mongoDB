import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { Producto } from './schemas/producto.schema';

@Injectable()
export class ProductoService {
  constructor(
    @InjectModel(Producto.name)
    private productoModel: Model<Producto>,
  ) {}

  async findAll() {
    return await this.productoModel.find();
  }

  async create(producto: CreateProductoDto) {
    return await this.productoModel.create(producto);
  }
}
