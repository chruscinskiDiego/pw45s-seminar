import { ApiProperty } from "@nestjs/swagger";
import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateExpenseDto {

    @ApiProperty({example: 150.00})
    @IsNumber()
    @IsNotEmpty()
    value: number;

    @ApiProperty({example: 'pending'})
    @IsString()
    @IsNotEmpty()
    situation: string;

    @ApiProperty({example: 'Mercado 22/04'})
    @IsString()
    obs: string

    @ApiProperty({example: '2025-04-23T01:22:25.674Z'})
    @IsDateString()
    @IsNotEmpty()
    validityDate: string;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    userId: number;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    categoryId: number;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    accountId: number;
    

}
