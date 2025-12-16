import {
  IsInt,
  IsPositive,
  IsString,
  Min,
  MinLength,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class CreateOrientationDto {
  @IsString()
  @MinLength(1)
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  age: number;

  @IsString()
  appointmentFor: string;

  @IsString()
  contactPreference: string;

  @IsString()
  country: string;

  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @IsOptional()
  reason: string;

  @IsString()
  @IsOptional()
  phone: string;

  @IsString()
  orioeva: string;
}
