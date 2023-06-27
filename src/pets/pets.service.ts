import { Injectable } from '@nestjs/common';
import { CreatePetDto, UpdatePetDto } from './dto/pets.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Pet } from './entities/pet.entity';

@Injectable()
export class PetsService {

  constructor(
    @InjectModel(Pet.name,'Pet')
    private readonly petModel: Model<Pet>
  ){}

  async create(createPetDto: CreatePetDto) {
    const newPet = await this.petModel.create(createPetDto)
    return newPet;
  }

  async findAll() {
    const pets = await this.petModel.find()
    return pets
  }

  async findOne(id: string) {
    const pet = await this.petModel.findById(id)
    return pet
  }

  async update(id: string, updatePetDto: UpdatePetDto) {
    const isPet = await this.findOne(id)
    const updatedPet = isPet.updateOne(updatePetDto)
    return updatedPet
  }

  async remove(id: string) {
    const deletePet = await this.petModel.deleteOne({_id: id})
    if( deletePet.deletedCount > 0 ){
      return true
    }
    return false
  }
}
