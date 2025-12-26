import {
  IsInt,
  IsPositive,
  IsString,
  Min,
  MinLength,
  IsOptional,
  IsEmail,
  IsNotEmpty,
  IsEnum,
} from 'class-validator';
import { Country } from 'src/interfaces/countries';
import {
  Admission,
  AppointmentFor,
  ContactPreference,
  HasDiagnose,
} from 'src/interfaces/interfaces';

export class CreateTherapyDto {
  @IsString()
  @MinLength(1)
  @IsNotEmpty()
  name: string;

  @IsInt()
  @IsPositive()
  @Min(1)
  age: number;

  @IsString()
  @IsNotEmpty()
  @IsEnum(AppointmentFor)
  appointmentFor: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Admission)
  admission: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(ContactPreference)
  contactPreference: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(Country)
  country: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  reason: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  phone: string;

  @IsString()
  @IsOptional()
  @IsNotEmpty()
  diagnose: string;

  @IsString()
  @IsNotEmpty()
  @IsEnum(HasDiagnose)
  hasDiagnose: string;
}
