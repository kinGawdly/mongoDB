import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductoModule } from './producto/producto.module';
import { VentaModule } from './venta/venta.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb://poke:12345@localhost:27017/tienda_electronica',
    ),
    ProductoModule,
    VentaModule,
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
