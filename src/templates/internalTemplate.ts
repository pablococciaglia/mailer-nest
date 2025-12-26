import { Address } from 'nodemailer/lib/mailer';
import { CreateEvaluationDto } from 'src/evaluation/dto/create-evaluation.dto';
import { FormOptions } from 'src/interfaces/interfaces';
import { CreateOrientationDto } from 'src/orientation/dto/create-orientation.dto';
import { CreateTherapyDto } from 'src/therapy-turn/dto/create-therapy.dto';

export const internalTemplate = (
  dto: CreateTherapyDto | CreateEvaluationDto | CreateOrientationDto,
  infoReject: (string | Address)[],
  queryType: FormOptions,
) => `
    <!doctype html>
<head>
  <title>Consulta recibida</title>
</head>
<html lang="en">
  <body>
    <h1>PsicoValGodoy</h1>
    <h2>Consulta recibida</h2>
    <p>Tipo de consulta: ${queryType}</p>
    <p>Nombre y apellido: ${dto.name}</p>
    <p>Edad: ${dto.age}</p>
    <p>Pais: ${dto.country}</p>
    <p>Email: ${dto.email}</p>
    <p>Preferencia de contacto: ${dto.contactPreference}</p>
    <p>Para quien es la consulta: ${dto.appointmentFor}</p>
    <p>Telefono: ${dto.phone}</p>
    <p>${'alreadyEvaluated' in dto ? `Tiene diagnostico?:  ${dto.alreadyEvaluated}` : ''}</p>
    <p>${'admission' in dto ? `Ha realizado admisión?:  ${dto.admission}` : ''}</p>
    <p>${'reason' in dto ? `Motivo de consulta:  ${dto.reason}` : ''}</p>
    <p>${'hasDiagnose' in dto ? `Tiene diagnóstico?: ${dto.hasDiagnose}` : ''}</p>
    <p>${'diagnose' in dto ? `Diagnóstico?: ${dto.diagnose}` : ''}</p>
    <p>${'alreadyEvaluated' in dto ? `Ya fue evaluado?: ${dto.alreadyEvaluated}` : ''}</p>
    <p>${'evaluationType' in dto ? `Tipo de evaluación?: ${dto.evaluationType}` : ''}</p>
    <p>Error a la hora de enviar E-mail al paciente: ${infoReject.join(', ') || 'no hubo error'}</p>
  </body>
</html>
`;
