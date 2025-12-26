import { Module } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { EvaluationController } from './evaluation.controller';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  controllers: [EvaluationController],
  providers: [EvaluationService],
  imports: [MailerModule],
})
export class EvaluationModule {}
