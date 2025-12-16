import { Injectable } from '@nestjs/common';
import { CreateTerapyTurnDto } from './dto/create-terapy-turn.dto';

@Injectable()
export class TerapyTurnService {
  createEmailTerapyTurn(createTerapyTurnDto: CreateTerapyTurnDto) {
    return createTerapyTurnDto;
  }
}
