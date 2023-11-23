import { ApiProperty } from '@nestjs/swagger';

export class CreateProductoDto {
  @ApiProperty({ example: 'IPhone 14 PRO', description: 'Nombre del Producto' })
  nombre: string;

  @ApiProperty({ example: 'telefonos', description: 'Nombre de la Categoria' })
  categorias: string;

  @ApiProperty({ example: '400000', description: 'Precio del Producto' })
  precioU: number;
}
