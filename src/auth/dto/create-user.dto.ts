import { IsEmail, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    //si no viene con estas propiedades no lo acepto
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @MinLength(6)
    password: string;


}
