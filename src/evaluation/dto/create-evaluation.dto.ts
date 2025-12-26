import {
  IsInt,
  IsPositive,
  IsString,
  Min,
  MinLength,
  IsEmail,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { Country } from 'src/interfaces/countries';
import {
  AlreadyEvaluated,
  AppointmentFor,
  ContactPreference,
  EvaluationType,
  FormOptions,
} from 'src/interfaces/interfaces';

export class CreateEvaluationDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  @IsNotEmpty()
  age: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(AppointmentFor)
  appointmentFor: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ContactPreference)
  contactPreference: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Country)
  country: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsNotEmpty()
  orioeva: FormOptions.EVALUACION;

  @IsString()
  @IsNotEmpty()
  @IsEnum(AlreadyEvaluated)
  alreadyEvaluated: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(EvaluationType)
  evaluationType: string;
}
