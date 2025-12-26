import { Country } from './countries';

export enum FormOptions {
  ORIENTACION = 'orientacion',
  EVALUACION = 'evaluacion',
  TERAPIA = 'terapia',
}

export enum HasDiagnose {
  HAS_DIAGNOSE = 'Tiene diagnostico',
  NO_DIAGNOSE = 'No tiene diagnostico',
}

export enum Admission {
  YES = 'Ya realizo una entrevista de admisión',
  NO = 'Necesita entrevista de admisión',
}

export enum AppointmentFor {
  ME = 'Para mí',
  OTHER_PERSON = 'Para otra persona',
}

export enum ContactPreference {
  WHATSAPP = 'WhatsApp',
  EMAIL = 'Correo electrónico',
}

export enum AlreadyEvaluated {
  YES = 'Ya realicé una evaluación previa',
  NO = 'No he realizado una evaluación previa',
}

export enum EvaluationType {
  AUTISMO = 'Autismo',
  TDAH = 'TDAH',
  ANSIEDAD = 'Ansiedad',
  TOC = 'TOC',
  OTRO = 'Otro',
}

export interface TherapyFormType extends PersonalData {
  admission: Admission;
  hasDiagnose: HasDiagnose;
  reason: string;
  diagnose?: string;
}

export interface EvaluationFormType extends PersonalData {
  alreadyEvaluated: AlreadyEvaluated;
  evaluationType: EvaluationType;
  orioeva: FormOptions.EVALUACION;
}

export interface OrientationFormType extends PersonalData {
  orioeva: FormOptions.ORIENTACION;
  reason: string;
}

interface PersonalData {
  age: number;
  appointmentFor: AppointmentFor;
  contactPreference: ContactPreference;
  country: Country;
  email: string;
  name: string;
  phone: string;
}
