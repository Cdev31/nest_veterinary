import { IsIn, IsNotEmpty, IsNumber, IsPhoneNumber, IsPositive, IsString, Length, Matches, MinLength, ValidateNested } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';

class OwnerInfo{

    @IsString({message:'firstname must be a string'})
    @IsNotEmpty({message: 'firstname is required'})
    @Length(3,10)
    readonly firstname: string
    
    @IsString({message:'surname must be a string'})
    @IsNotEmpty({message: 'surname is required'})
    @Length(3,10)
    readonly surname: string

    @IsString()
    @Matches(/^[0-9]{7}-[0-9]$/, {message: 'Invalid dui'})
    @IsNotEmpty({message: 'dui is required'})
    readonly dui: string

    @IsPhoneNumber('SV')
    @IsNotEmpty()
    readonly phone: string

}

export class CreatePetDto {

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    readonly name: string

    @IsString()
    @IsNotEmpty()
    readonly species: string

    @IsString()
    @IsNotEmpty()
    @Length(40,80)
    readonly descriptions: string
    
    @ValidateNested()
    @IsNotEmpty()
    readonly ownerInfo: OwnerInfo

    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly age: number

    @IsIn(['Macho', 'Hembra'])
    @IsNotEmpty()
    readonly sex: string

}

export class UpdatePetDto extends PartialType(CreatePetDto) {}


