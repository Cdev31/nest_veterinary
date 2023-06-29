import { Module } from '@nestjs/common';
import { PetsService } from './pets.service';
import { PetsController } from './pets.controller';
import { Pet, petSchema } from './entities/pet.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';


@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: Pet.name,
        imports: [ConfigModule],
        useFactory:()=>{
          const schema = petSchema
          schema.pre('findOne', function (){
          })
          return schema
        },
        inject: [ConfigService]
      }
    ])
  ],
  controllers: [PetsController],
  providers: [PetsService]
})
export class PetsModule {}
