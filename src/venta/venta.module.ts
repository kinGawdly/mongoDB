import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Venta, VentaSchema } from './schemas/venta.schema';
import { VentaController } from './venta.controller';
import { VentaService } from './venta.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Venta.name,
        schema: VentaSchema,
      },
    ]),
  ],
  controllers: [VentaController],
  providers: [VentaService],
})
export class VentaModule {}
