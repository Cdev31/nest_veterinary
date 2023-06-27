import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { Pet, petSchema } from './entities/pet.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Pet.name,
        schema: petSchema
      }
    ])
  ],
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}
