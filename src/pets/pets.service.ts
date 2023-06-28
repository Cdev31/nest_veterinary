import { Injectable } from '@nestjs/common';
import { CreatePetDto, QueryFindPetDto, UpdatePetDto } from './dto/pets.dto';
import { InjectModel } from '@nestjs/mongoose';
import {Model} from 'mongoose'
import { Pet } from './entities/pet.entity';
import { Capitalazed } from 'src/utils/capitalazed';

interface IWhere{
  name?: string
  species?: string
}

@Injectable()
export class PetsService {

  constructor(
    @InjectModel(Pet.name)
    private readonly petModel: Model<Pet>
  ){}

  async create(createPetDto: CreatePetDto) {
    
    const transformWords = Capitalazed([createPetDto.name,createPetDto.species])

    createPetDto.name = transformWords[0]
    createPetDto.species = transformWords[1]

    return  await this.petModel.create(createPetDto);
  }

  async findAll(query: QueryFindPetDto) {
    
    let where: IWhere= {  
    }

    if ( query.species ){
      where.species = query.species
    }else if( query.name ){
      where.name = query.name
    } 

    if ( query.species  && query.name) {
      where.name = query.name
      where.species = query.species
     }

    const pets = await this.petModel.find(where)
    
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
