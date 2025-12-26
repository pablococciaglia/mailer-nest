import { Injectable } from '@nestjs/common';
import { CreateOrientationDto } from './dto/create-orientation.dto';
import { FormOptions } from 'src/interfaces/interfaces';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class OrientationService {
  constructor(private readonly mailerService: MailerService) {}

  create(createOrientationDto: CreateOrientationDto) {
    this.mailerService.sendEmail(createOrientationDto, FormOptions.ORIENTACION);
  }
}
