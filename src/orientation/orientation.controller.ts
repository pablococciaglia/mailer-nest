import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { OrientationService } from './orientation.service';
import { CreateOrientationDto } from './dto/create-orientation.dto';
import { Response } from 'express';

@Controller('orientation')
export class OrientationController {
  constructor(private readonly orientationService: OrientationService) {}

  @Post()
  create(
    @Body() createOrientationDto: CreateOrientationDto,
    @Res() res: Response,
  ) {
    try {
      console.log(createOrientationDto);
      this.orientationService.create(createOrientationDto);
      return res.status(HttpStatus.OK).send();
    } catch (error) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json(error).send();
    }
  }
}
