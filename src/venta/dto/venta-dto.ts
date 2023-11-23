import { Producto } from 'src/producto/schemas/producto.schema';

export class VentaDto {
  producto: Producto;

  unidadesVendidas: number;

  totalVenta: number;

  fechaVenta: Date;

  productoId: string;
}
