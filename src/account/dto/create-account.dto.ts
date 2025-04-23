import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateAccountDto {

    @ApiProperty({example: '40028922'})
    @IsString()
    @IsNotEmpty()
    number: string;

    @ApiProperty({example: 'Conta Corrente'})
    @IsString()
    @IsNotEmpty()
    type: string;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    bankId: number;
    
}
