import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { EvaluationService } from './evaluation.service';
import { CreateEvaluationDto } from './dto/create-evaluation.dto';
import { Response } from 'express';

@Controller('evaluation')
export class EvaluationController {
  constructor(private readonly evaluationService: EvaluationService) {}

  @Post()
  create(
    @Body() createEvaluationDto: CreateEvaluationDto,
    @Res() res: Response,
  ) {
    try {
      this.evaluationService.create(createEvaluationDto);
      return res.status(HttpStatus.OK).send();
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error).send();
    }
  }
}
