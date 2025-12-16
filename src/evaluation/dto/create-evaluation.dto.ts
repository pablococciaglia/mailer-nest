import {
  IsInt,
  IsPositive,
  IsString,
  Min,
  MinLength,
  IsEmail,
} from 'class-validator';

export class CreateEvaluationDto {
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
  phone: string;

  @IsString()
  orioeva: string;

  @IsString()
  alreadyEvaluated: string;

  @IsString()
  evaluationType: string;
}
