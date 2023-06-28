import { Module } from '@nestjs/common';
import { VetService } from './vet.service';
import { VetController } from './vet.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Vet, vetSchema } from './entities/vet.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: Vet.name,
      schema: vetSchema
    }])
  ],
  controllers: [VetController],
  providers: [VetService]
})
export class VetModule {}
