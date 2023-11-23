import { ObjectId } from 'mongodb';
import { CreateVentaDto } from '../dto/create-venta.dto';
import { VentaDto } from '../dto/venta-dto';
import { Venta } from '../schemas/venta.schema';

export class VentaMapper {
  static toDto(entidad: Venta): VentaDto {
    const dto = new VentaDto();

    dto.producto = entidad.producto;
    dto.unidadesVendidas = entidad.unidadesVendidas;
    dto.totalVenta = entidad.totalVenta;
    dto.fechaVenta = entidad.fechaVenta;
    dto.productoId = entidad.productoId.toString();

    return dto;
  }

  static toDtoList(entidades: Venta[]): VentaDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toSchema(dto: CreateVentaDto): Venta {
    const entidad = new Venta();

    entidad.totalVenta = dto.totalVenta;
    entidad.unidadesVendidas = dto.unidadesVendidas;
    entidad.productoId = new ObjectId(dto.productoId);

    return entidad;
  }
}
