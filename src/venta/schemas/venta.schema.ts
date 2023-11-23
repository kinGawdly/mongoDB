import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';
import { Producto } from '../../producto/schemas/producto.schema';

@Schema({ collection: 'venta' })
export class Venta {
  @Prop({ type: Types.ObjectId, ref: 'Producto' })
  producto: Producto;

  @Prop({ name: 'unidadesVendidas' })
  unidadesVendidas: number;

  @Prop({ name: 'totalVenta' })
  totalVenta: number;

  @Prop({ name: 'fechaVenta' })
  fechaVenta: Date;

  @Prop({ name: 'productoId' })
  productoId: Types.ObjectId;
}
export const VentaSchema = SchemaFactory.createForClass(Venta);
