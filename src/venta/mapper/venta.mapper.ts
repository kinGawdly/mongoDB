import { ObjectId } from 'mongodb';
import { ProductoMapper } from 'src/producto/mapper/producto.mapper';
import { Producto } from 'src/producto/schemas/producto.schema';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { VentaDto } from '../dto/venta.dto';
import { Venta } from '../schemas/venta.schema';

export class VentaMapper {
  static toDto(schema: Venta): VentaDto {
    const dto = new VentaDto();
    if (!(schema.producto instanceof ObjectId)) {
      dto.producto = ProductoMapper.toDto(schema.producto);
    }
    dto.cantidad = schema.cantidad;
    dto.total = schema.total;
    dto.fecha = schema.fecha;
    return dto;
  }

  static toDtoList(schemas: Venta[]): VentaDto[] {
    return schemas.map((schema) => this.toDto(schema));
  }

  static toSchema(dto: CreateVentaDto, producto: Producto, id: string): Venta {
    const schema: Venta = new Venta();
    schema.producto = new ObjectId(id);
    schema.cantidad = dto.cantidad;
    schema.total = producto.precio * dto.cantidad;
    schema.fecha = new Date();
    return schema;
  }

  static toReportList(arrayCategorias: any) {
    return arrayCategorias.reduce((resultado, categoria) => {
      resultado[categoria._id] = categoria.ventas;
      return resultado;
    }, {});
  }
}
