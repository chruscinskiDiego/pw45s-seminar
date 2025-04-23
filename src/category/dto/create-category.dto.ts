import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator";

export class CreateCategoryDto {

    @ApiProperty({example: 'Mercado'})
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    name: string;

    @ApiProperty({example: 1})
    @IsNumber()
    @IsNotEmpty()
    userId: number;
}
