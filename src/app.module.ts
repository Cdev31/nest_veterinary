import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { VetModule } from './vet/vet.module';
import { ConfigEnv } from 'config/config.env';

@Module({
  imports: [
    PetsModule,
    ConfigModule.forRoot({
      load: [ConfigEnv]
    }),
    MongooseModule.forRoot(process.env.DB_URL),
    VetModule
  ],
})
export class AppModule {}
