import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {

    @ApiProperty({example: 'Gustavo'})
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(50)
    readonly firstName: string;

    @ApiProperty({example: 'Moretto Dalla Costa'})
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(255)
    readonly lastName: string;

    @ApiProperty({example: 'gustavo@alunos.utfpr.edu.br'})
    @IsEmail()
    @IsNotEmpty()
    readonly email: string;

    @ApiProperty({example: '40028922'})
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(30)
    readonly phoneNumber: string;
    
    @ApiProperty({example: 'b0mbardin0cr0c0dil0'})
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    readonly password: string;


}
