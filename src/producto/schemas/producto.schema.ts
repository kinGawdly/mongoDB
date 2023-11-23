import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ collection: 'producto' })
export class Producto {
  @Prop({ name: 'nombre' })
  nombre: string;

  @Prop({ name: 'categorias' })
  categorias: string;

  @Prop({ name: 'precioU' })
  precioU: number;
}

export const ProductoSchema = SchemaFactory.createForClass(Producto);
