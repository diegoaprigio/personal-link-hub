import { HttpStatus, Injectable } from '@nestjs/common';
import HealthCheckResponse from 'src/types/HealthCheckResponse';

@Injectable()
export class AppService {
  getHealthcheck(): HealthCheckResponse {
    return { status: HttpStatus.OK, message: 'Service is up and running!' };
  }
}
