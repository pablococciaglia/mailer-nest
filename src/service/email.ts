import { Injectable } from '@nestjs/common';
import { EmailProvider } from '../email/email';

@Injectable()
export class EmailService {
  constructor(private emailProvider: EmailProvider) {}
  async sendEmail(body) {
    try {
      await this.emailProvider.sendEmail(body);
    } catch (error) {
      console.log(error);
    }
  }
}
