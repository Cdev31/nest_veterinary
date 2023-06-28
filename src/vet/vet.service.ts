import { Injectable } from '@nestjs/common';
import { CreateVetDto, UpdateVetDto } from './dto/vet.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Vet } from './entities/vet.entity';
import { Model } from 'mongoose';

@Injectable()
export class VetService {

  constructor(
    @InjectModel(Vet.name)
    private readonly vetModel: Model<Vet>
  ){}

  async create(createVetDto: CreateVetDto) {
    const newVet = await this.vetModel.create(createVetDto)
    return newVet
  }

  async findAll() {
    const vets = await this.vetModel.find()
    return vets
  }

  async findOne(id: string) {
    const vet = await this.vetModel.findById(id)
    return vet
  }

  async update(id: string, updateVetDto: UpdateVetDto) {
    const isVet = await this.findOne(id)
    const updateVet = isVet.updateOne(updateVetDto)
    return updateVet
  }

  async remove(id: string) {
    const deleteVet = await this.vetModel.deleteOne({_id: id})
    if ( deleteVet.deletedCount > 0 ) return true
    return false
  }
}
