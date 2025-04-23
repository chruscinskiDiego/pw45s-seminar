import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";

export class CreateBankDto { 

    @ApiProperty({example: 'Banco do Brasil'})
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    readonly name: string;

    @ApiProperty({example: '0001'})
    @IsString()
    @IsNotEmpty()
    readonly code: string;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    readonly userId: number;
    
}
