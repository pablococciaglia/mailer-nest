import { Module } from '@nestjs/common';
import { TerapyTurnService } from './terapy-turn.service';
import { TerapyTurnController } from './terapy-turn.controller';

@Module({
  controllers: [TerapyTurnController],
  providers: [TerapyTurnService],
})
export class TerapyTurnModule {}
