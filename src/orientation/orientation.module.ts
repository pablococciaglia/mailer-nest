import { Module } from '@nestjs/common';
import { OrientationService } from './orientation.service';
import { OrientationController } from './orientation.controller';

@Module({
  controllers: [OrientationController],
  providers: [OrientationService],
})
export class OrientationModule {}
