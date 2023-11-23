import { CreateProductoDto } from '../dto/create-producto.dto';
import { ProductoDto } from '../dto/producto.dto';
import { Producto } from '../schemas/producto.schema';

export class ProductoMapper {
  static toDto(entidad: Producto): ProductoDto {
    const dto = new ProductoDto();

    dto.nombre = entidad.nombre;
    dto.categorias = entidad.categorias;
    dto.precioU = entidad.precioU;

    return dto;
  }

  static toDtoList(entidades: Producto[]): ProductoDto[] {
    return entidades.map((entidad) => this.toDto(entidad));
  }

  static toSchema(dto: CreateProductoDto): Producto {
    const entidad = new Producto();

    entidad.nombre = dto.nombre;
    entidad.categorias = dto.categorias;
    entidad.precioU = dto.precioU;

    return entidad;
  }
}
