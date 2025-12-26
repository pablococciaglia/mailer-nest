import { Module } from '@nestjs/common';
import { TherapyService } from './therapy.service';
import { TherapyController } from './therapy.controller';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  controllers: [TherapyController],
  providers: [TherapyService],
  imports: [MailerModule],
})
export class TherapyModule {}
