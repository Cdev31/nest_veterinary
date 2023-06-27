import { Module } from '@nestjs/common';
import { PetsModule } from './pets/pets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    PetsModule,
    MongooseModule.forRoot(process.env.DB_URL),
  ],
})
export class AppModule {}
