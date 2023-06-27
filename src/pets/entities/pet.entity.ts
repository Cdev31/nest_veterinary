import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Schema as types, Document} from 'mongoose'

@Schema()
export class OwnerInfo{
    @Prop({
        type: types.Types.String,
        required: true
    })
    firstname: string

    @Prop({
        type: types.Types.String,
        required: true
    })
    surname: string

    @Prop({
        type: types.Types.String,
        required: true
    })
    dui: string

    @Prop({
        type: types.Types.String,
        required: true
    })
    phone: string
}

@Schema()
export class Pet extends Document {

    @Prop({
        type: types.Types.String,
        required: true,
        min: 3,
    })
    name: string

    @Prop({
        type: types.Types.String,
        required: true,
    })
    species: string

    @Prop({
        type: types.Types.String,
        required: true,
        min:40
    })
    descriptions: string

    @Prop({
        type: OwnerInfo,
        required: true,
    })
    ownerInfo: OwnerInfo

    @Prop({
        type: types.Types.Number,
        required: true,
        min:0
    })
    age: number

    @Prop({
        type: types.Types.String,
        enum: ['Macho','Hembra'],
        required: true,
    })
    sex: string

}

export const petSchema = SchemaFactory.createForClass(Pet)