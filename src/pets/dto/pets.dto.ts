import { IsIn, IsNotEmpty, IsNumber, IsOptional, IsPhoneNumber, IsPositive, IsString, Length, Matches, MinLength, ValidateIf, ValidateNested } from 'class-validator'
import { Type } from 'class-transformer'
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
    @Matches(/^\d{7}-\d{1}$/, {message: 'Invalid dui'})
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
    name: string

    @IsString()
    @IsNotEmpty()
    species: string

    @IsString()
    @IsNotEmpty()
    @Length(40,80)
    readonly descriptions: string
    
    @ValidateNested()
    @IsNotEmpty()
    @Type(()=> OwnerInfo)
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

export class QueryFindPetDto {

    @IsString()
    @IsOptional()
    readonly name?: string

    @IsString()
    @IsOptional()
    readonly species?: string

    @IsNumber()
    @IsOptional()
    readonly min_age?: number

    @IsString()
    @IsOptional()
    @ValidateIf((obj,value)=> value !== undefined)
    readonly max_age?: number

}
