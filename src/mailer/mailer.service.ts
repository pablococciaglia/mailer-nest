import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { template } from '../templates/template';
import { CreateTherapyDto } from 'src/therapy-turn/dto/create-therapy.dto';
import { CreateEvaluationDto } from 'src/evaluation/dto/create-evaluation.dto';
import { CreateOrientationDto } from 'src/orientation/dto/create-orientation.dto';
import { internalTemplate } from 'src/templates/internalTemplate';
import { FormOptions } from 'src/interfaces/interfaces';

@Injectable()
export class MailerService {
  constructor(private readonly configService: ConfigService) {}
  mailTransport() {
    const transporter = nodemailer.createTransport({
      host: this.configService.get<string>('MAIL_HOST'),
      port: +this.configService.get<string>('MAIL_PORT'),
      secure: false,
      auth: {
        user: this.configService.get<string>('MAIL_USER'),
        pass: this.configService.get<string>('MAIL_PASS'),
      },
    });
    return transporter;
  }
  async sendEmail(
    dto: CreateTherapyDto | CreateEvaluationDto | CreateOrientationDto,
    queryType: FormOptions,
  ) {
    const info = await this.mailTransport().sendMail({
      to: dto.email,
      from: `"Lic. Valeria Godoy" <${this.configService.get<string>('MAIL_USER')}>`,
      subject: 'Psicovalgodoy: Consulta recibida',
      text: 'Hemos recibido tu consulta y pronto nos pondremos en contacto contigo.', // Plain-text version of the message
      html: template(dto.name), // HTML version of the message
    });

    await this.mailTransport().sendMail({
      to: 'cocciagliap@hotmail.com',
      subject: 'Consulta desde Web',
      text: `${JSON.stringify(dto)}`,
      html: internalTemplate(dto, info.rejected, queryType),
    });
  }
}
