import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { TerapyTurnService } from './terapy-turn.service';
import { CreateTerapyTurnDto } from './dto/create-terapy-turn.dto';
import { Response } from 'express';

@Controller('terapy-turn')
export class TerapyTurnController {
  constructor(private readonly terapyTurnService: TerapyTurnService) {}

  @Post()
  async createEmailTerapyTurn(
    @Body() createTerapyTurnDto: CreateTerapyTurnDto,
    @Res() res: Response,
  ) {
    try {
      await this.terapyTurnService.createEmailTerapyTurn(createTerapyTurnDto);
      return res.status(HttpStatus.OK).send();
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error).send();
    }
  }
}
