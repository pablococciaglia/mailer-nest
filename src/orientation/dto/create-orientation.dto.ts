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
  AppointmentFor,
  ContactPreference,
  FormOptions,
} from 'src/interfaces/interfaces';

export class CreateOrientationDto {
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
  @IsOptional()
  @IsNotEmpty()
  reason: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  phone: string;

  @IsString()
  @IsNotEmpty()
  orioeva: FormOptions.ORIENTACION;
}
