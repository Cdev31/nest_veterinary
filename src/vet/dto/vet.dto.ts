import { PartialType } from '@nestjs/mapped-types';
import { IsNotEmpty, IsNumber, IsPositive, IsString, Length, Min } from 'class-validator'

export class CreateVetDto {
    
    @IsString()
    @IsNotEmpty()
    @Length(3,10)
    readonly firstname: string

    
    @IsString()
    @IsNotEmpty()
    @Length(3,10)
    readonly surname: string

    
    @IsString()
    @IsNotEmpty()
    readonly especiality: string

    
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    @Min(20)
    readonly age: number

    
    @IsString()
    @IsNotEmpty()
    readonly area: string
    
}

export class UpdateVetDto extends PartialType(CreateVetDto) {}
