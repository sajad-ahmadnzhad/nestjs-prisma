import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator"

export class CreateUserDto {
    @IsNotEmpty()
    @IsOptional()
    @IsString()
    displayName?: string

    @IsString()
    @IsNotEmpty()
    username: string

    @IsString()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}
