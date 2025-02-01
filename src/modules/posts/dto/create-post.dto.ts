import { IsNotEmpty, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from "class-validator"

export class CreatePostDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    title: string

    @IsString()
    @IsNotEmpty()
    @IsOptional()
    description?: string

    @IsNumber()
    @IsPositive()
    userId: number
}
