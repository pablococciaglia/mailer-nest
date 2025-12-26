import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { TherapyService } from './therapy.service';
import { CreateTherapyDto } from './dto/create-therapy.dto';
import { Response } from 'express';

@Controller('therapy')
export class TherapyController {
  constructor(private readonly TherapyService: TherapyService) {}

  @Post()
  createEmailTherapy(
    @Body() createTherapyDto: CreateTherapyDto,
    @Res() res: Response,
  ) {
    try {
      this.TherapyService.createEmailTherapy(createTherapyDto);
      return res.status(HttpStatus.OK).send();
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error).send();
    }
  }
}
