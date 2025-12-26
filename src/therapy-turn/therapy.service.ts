import { Injectable } from '@nestjs/common';
import { CreateTherapyDto } from './dto/create-therapy.dto';
import { MailerService } from 'src/mailer/mailer.service';
import { FormOptions } from 'src/interfaces/interfaces';

@Injectable()
export class TherapyService {
  constructor(private readonly mailerService: MailerService) {}
  createEmailTherapy(createTherapyDto: CreateTherapyDto) {
    this.mailerService.sendEmail(createTherapyDto, FormOptions.TERAPIA);
  }
}
