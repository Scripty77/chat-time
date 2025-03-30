import {
  IsEmail,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class updatedUser {
  @IsString()
  @MaxLength(80)
  name: string;

  @IsString()
  @MinLength(50)
  password: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  @MaxLength(150)
  biografia?: string;
}
