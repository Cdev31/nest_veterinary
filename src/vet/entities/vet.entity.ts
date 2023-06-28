import { Schema, SchemaFactory, Prop } from '@nestjs/mongoose';
import { Document } from 'mongoose'

@Schema()
export class Vet extends Document {

    @Prop()
    firstname: string

    @Prop()
    surname: string

    @Prop()
    especiality: string

    @Prop()
    age: number

    @Prop()
    area: string

}

export const vetSchema = SchemaFactory.createForClass( Vet )
