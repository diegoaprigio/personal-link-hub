import { Module } from '@nestjs/common';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import SwaggerDocumentationProvider from 'src/providers/SwaggerDocumentationProvider';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, SwaggerDocumentationProvider],
})
export class AppModule {}
