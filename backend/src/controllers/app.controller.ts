import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { AppService } from '../services/app.service';
import {
  ApiOkResponse,
  ApiBadGatewayResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';
import HealthCheckResponse from 'src/types/HealthCheckResponse';

@Controller('api/v1')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('healthcheck')
  @HttpCode(HttpStatus.OK)
  @ApiOkResponse({
    description: 'Service is up and running!',
    type: HealthCheckResponse,
  })
  @ApiBadGatewayResponse({
    description: 'Service is down!',
    type: HealthCheckResponse,
  })
  @ApiInternalServerErrorResponse({
    description: 'Service is down!',
    type: HealthCheckResponse,
  })
  getHealthcheck(): HealthCheckResponse {
    return this.appService.getHealthcheck();
  }
}
