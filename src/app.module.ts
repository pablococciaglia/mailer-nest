import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TherapyModule } from './therapy-turn/therapy.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { OrientationModule } from './orientation/orientation.module';
import { MailerModule } from './mailer/mailer.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TherapyModule,
    EvaluationModule,
    OrientationModule,
    MailerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
