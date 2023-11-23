import { ApiProperty } from '@nestjs/swagger';

export class CreateVentaDto {
  @ApiProperty({
    example: '655d9b9cf6c2b3ec387cbfb4',
    description: 'ObjectId Del producto a vender',
  })
  productoId: string;

  @ApiProperty({
    example: '10',
    description: 'Unidades vendidas',
  })
  unidadesVendidas: number;

  @ApiProperty({
    example: '450000',
    description: 'Total venta',
  })
  totalVenta: number;
}
