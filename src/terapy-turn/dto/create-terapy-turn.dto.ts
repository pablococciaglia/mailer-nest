import {
  IsInt,
  IsPositive,
  IsString,
  Min,
  MinLength,
  IsOptional,
  IsEmail,
} from 'class-validator';

export class CreateTerapyTurnDto {
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
  admission: string;

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
  @IsOptional()
  diagnose: string;

  @IsString()
  hasDiagnose: string;
}
