import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { TerapyTurnModule } from './terapy-turn/terapy-turn.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { OrientationModule } from './orientation/orientation.module';
import { EmailProvider } from './email/email';

@Module({
  imports: [TerapyTurnModule, EvaluationModule, OrientationModule],
  controllers: [AppController],
  providers: [AppService, EmailProvider],
})
export class AppModule {}
