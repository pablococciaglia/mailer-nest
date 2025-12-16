import { Injectable } from '@nestjs/common';
import { CreateOrientationDto } from './dto/create-orientation.dto';

@Injectable()
export class OrientationService {
  create(createOrientationDto: CreateOrientationDto) {
    return createOrientationDto;
  }
}
