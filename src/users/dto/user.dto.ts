import { IsNotEmpty, IsString, IsNumber, IsOptional } from "class-validator";
import { ROLES } from "src/constants/roles";

export class UserDTO {
    @IsNotEmpty()
    @IsString()
    firstName: string;

    @IsNotEmpty()
    @IsString()
    lastName: string;
 
    @IsNotEmpty()
    @IsNumber()
    ege: number;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    username: string;

    @IsNotEmpty()
    @IsString()
    password: string;

    @IsNotEmpty()
    role: ROLES;
}

export class UserUpdateDTO {
    @IsOptional()
    @IsString()
    firstName: string;

    @IsOptional()
    @IsString()
    lastName: string;
 
    @IsOptional()
    @IsNumber()
    ege: number;

    @IsOptional()
    @IsString()
    email: string;

    @IsOptional()
    @IsString()
    username: string;

    @IsOptional()
    @IsString()
    password: string;

    @IsOptional()
    role: ROLES;
}