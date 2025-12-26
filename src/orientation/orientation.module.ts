import { Module } from '@nestjs/common';
import { OrientationService } from './orientation.service';
import { OrientationController } from './orientation.controller';
import { MailerModule } from 'src/mailer/mailer.module';

@Module({
  controllers: [OrientationController],
  providers: [OrientationService],
  imports: [MailerModule],
})
export class OrientationModule {}
